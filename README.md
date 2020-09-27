# Bakalari.js

Bakalari.js is nodejs module that is currently in development.  
This module is a simple wrapper for bakalari RestAPI (v3+)

## Installation

The module currently isn't downloadable however you can still use code from this reposiory.

## Usage

```nodejs
// Import bakalari.js
const bakalari = require("bakalari.js");


// Create user object
const user = new bakalari.User("https://link.to.bakalari.webapp/");

// Login with your username and password
await user.login("username", "password");

// Get all subjects and log them to the console
console.log(await user.getSubjects());
```
