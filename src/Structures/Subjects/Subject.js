const Teacher = require("./Teacher");

class Subject {

    constructor(name = "", abbrev = "", teacher = new Teacher(), id = "0") {
        this.name = name;
        this.abbrev = abbrev;
        this.teacher = teacher;
        this.id = id;
    }

}

module.exports = Subject;