const fetch = require("node-fetch");
/**
 * With this class you can get list of subjects from bakalari API
 * @see getSubjects
 *
 * @author 1vomarek1
 */
class SubjectManager {

    /**
     * Get all subjects from bakalari website
     * @param url Base url of bakalari website
     * @param token Valid access token
     * @returns {Promise<Array<JSON>>}
     */
    getSubjects(url = "", token = "") {

        return new Promise(async (accept, reject) => {

            fetch(url+"/api/3/subjects", { method: "GET", headers: { "Content-Type": "application/x-www-form-urlencoded", "Authorization": "Bearer "+token } })
                .then(async res => {
                    if (!res.ok) reject();
                    accept((await res.json())["Subjects"]);
                })

        })

    }

}

module.exports = SubjectManager;