const fetch = require("node-fetch");

class SubjectManager {

    getSubjects(url = "", token = "") {

        return new Promise(async (accept, reject) => {

            fetch(url+"/api/3/subjects", { method: "GET", headers: { "Content-Type": "application/x-www-form-urlencoded", "Authorization": "Bearer "+token}})
                .then(res => {
                    if (!res.ok) reject();
                    console.log(res.json());
                    accept(res.json()["Subjects"]);
                })

        })

    }

}

module.exports = SubjectManager;