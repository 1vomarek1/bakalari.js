const TokenManager = require("../Util/TokenManager");
const SubjectManager = require("../Util/SubjectManager");

/**
 * This is the starting point of your bakalari client.
 * @see login
 *
 * @author 1vomarek1
 */
class User {

    constructor(url = "") {
        this.url = url;
    }

    /**
     * Login with username and password. Returns promise that gets accepted / rejected after login
     * @returns {Promise<void>}
     */
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

    /**
     * Refresh current token that the user has. Returns promise that gets accepted / rejected after refresh
     * @returns {Promise<void>}
     */
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


    /**
     * Get all subjects from bakalari website
     * @returns {Promise<Array<Subject>>}
     */
    getSubjects() {

        return new Promise( async (accept, reject) => {

            if (this.valid_until <= Date.now()) await this.refreshToken();

            const subjectsJSON = await new SubjectManager().getSubjects(this.url, this.access_token)
                .catch(() => {
                    return reject();
                });

            const subjects = [];

            for (const subjectJSON of subjectsJSON) {

                /**
                 *
                 * @type {Teacher}
                 */
                const teacher = {
                    name: subjectJSON["TeacherName"],
                    abbrev: subjectJSON["TeacherAbbrev"],
                    email: subjectJSON["TeacherEmail"],
                    web: subjectJSON["TeacherWeb"],
                    schoolPhone: subjectJSON["TeacherSchoolPhone"],
                    homePhone: subjectJSON["TeacherHomePhone"],
                    mobilePhone: subjectJSON["TeacherMobilePhone"]
                }

                /**
                 *
                 * @type {Subject}
                 */
                const subject = {
                    name: subjectJSON["SubjectName"],
                    abbrev: subjectJSON["SubjectAbbrev"],
                    teacher: teacher,
                    id: subjectJSON["SubjectID"]
                };

                subjects.push(subject);
            }

            accept(subjects);

        });

    }

}

module.exports = User;