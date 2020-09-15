
module.exports = {

    // Start point
    User: require("./User/User.js"),

    // Util
    TokenManager: require("./Util/TokenManager"),
    SubjectManager: require("./Util/SubjectManager"),

    // Info
    version: require("../package.json").version,

    // Structures
    Subject: require("./Structures/Subjects/Subject"),
    Teacher: require("./Structures/Subjects/Teacher"),
}