const fetch = require("node-fetch");
/**
 * With this class you can get list of substitutions from bakalari API
 * @see getSubstitutions
 *
 * @author 1vomarek1
 */
class SubstitutionManager {

    /**
     * Get all subjects from bakalari website
     * @param url Base url of bakalari website
     * @param token Valid access token
     * @returns {Promise<Array<JSON>>}
     */
    getSubstitutions(url = "", token = "") {

        return new Promise(async (accept, reject) => {

            fetch(url+"/api/3/substitutions", { method: "GET", headers: { "Content-Type": "application/x-www-form-urlencoded", "Authorization": "Bearer "+token } })
                .then(async res => {
                    if (!res.ok) reject();
                    accept((await res.json())["Changes"]);
                })
                .catch(err => reject(err));

        })

    }

}

module.exports = SubstitutionManager;