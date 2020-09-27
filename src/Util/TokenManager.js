const fetch = require("node-fetch");

/**
 * This class is used to get new access and refresh token, or to refresh token
 * @see newUsingRefreshToken
 * @see newUsingPassword
 *
 * @author 1vomarek1
 */
class TokenManager {

    /**
     * Get new access token using username and password
     * @param url Base url of bakalari website
     * @param username Username of your account
     * @param password Password of your account
     * @returns {Promise<TokenResponse>}
     */
    newUsingPassword(url = "", username = "", password = "") {
        return new Promise(async (accept, reject) => {

            fetch(url+"/api/login", { method: "POST", body: `client_id=ANDR&grant_type=password&username=${username}&password=${password}`, headers: { "Content-Type": "application/x-www-form-encoded" } })
                .then(async res => {
                    if (!res.ok) reject();
                    accept(await res.json());
                });

        });
    }

    /**
     * Get new access token using refresh token
     * @param url Base url of bakalari website
     * @param refresh_token A valid refresh token
     * @returns {Promise<TokenResponse>}
     */
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