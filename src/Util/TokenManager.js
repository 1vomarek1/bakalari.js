const fetch = require("node-fetch");

class TokenManager {

    newUsingPassword(url = "", username = "", password = "") {
        return new Promise(async (accept, reject) => {

            fetch(url+"/api/login", { method: "POST", body: `client_id=ANDR&grant_type=password&username=${username}&password=${password}`, headers: { "Content-Type": "application/x-www-form-encoded" } })
                .then(res => {
                    if (!res.ok) reject();
                    accept(res.json());
                });

        });
    }

    newUsingRefreshToken(url = "", refresh_token = "") {
        return new Promise(async (accept, reject) => {

            fetch(url+"/api/login", { method: "POST", body: `client_id=ANDR&grant_type=refresh_token&refresh_token=${refresh_token}`, headers: { "Content-Type": "application/x-www-form-encoded" } })
                .then(res => {
                    if (!res.ok) reject();
                    accept(res.json());
                });

        });
    }

}

module.exports = TokenManager;