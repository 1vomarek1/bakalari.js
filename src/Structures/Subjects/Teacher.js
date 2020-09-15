
class Teacher {

    constructor(name = "", abbrev = "", email = "", web = "", schoolPhone = "", homePhone = "", mobilePhone = "") {
        this.name = name;
        this.abbrev = abbrev;
        this.email = email;
        this.web = web;
        this.schoolPhone = schoolPhone;
        this.homePhone = homePhone;
        this.mobilePhone = mobilePhone;
    }

}

module.exports = Teacher;