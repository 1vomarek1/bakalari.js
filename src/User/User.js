const TokenManager = require("../Util/TokenManager");
const SubjectManager = require("../Util/SubjectManager");

class User {

    constructor(url = "") {
        this.url = url;
    }

    login(username = "", password = "") {

        return new Promise( async (accept, reject) => {

            new TokenManager().newUsingPassword(this.url, username, password)
                .then((res) => {

                    this.access_token = res.access_token;
                    this.refresh_token = res.refresh_token;
                    this.valid_until = Date.now() + (res.expires_in);
                    accept();

                })
                .catch(() => {
                    reject("Couldn't login!");
                });

        });

    }

    refreshToken() {

        return new Promise(async (accept, reject) => {

            const res = await new TokenManager().newUsingRefreshToken(this.url, this.refresh_token)
                .then(() => {

                    this.access_token = res.access_token;
                    this.refresh_token = res.refresh_token;
                    this.valid_until = Date.now() + (res.expires_in);
                    accept();

                })
                .catch(() => {
                    reject("Couldn't refresh token!");
                });

        });

    }


    getSubjects() {

        return new Promise( async (accept, reject) => {

            if (this.valid_until <= Date.now()) await this.refreshToken();

            const subjects = await new SubjectManager().getSubjects(this.url, this.access_token);

            //console.log(subjects);

        });

    }

}

module.exports = User;