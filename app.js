// SETUP PORT
const port = process.env.PORT || 3000;

// CORE MODULES
const path = require("path");
// NPM MODULES
const express = require("express");
const hbs = require("hbs");
// CUSTOM MODULES

// CREATE EXPRESS APP
const app = express();

// SETUP DIRECTORY PATHS
const publicDirectoryPath = path.join(__dirname, "/public");
const viewsDirectoryPath = path.join(__dirname, "/template_engine/views");
const partialsDirectoryPath = path.join(__dirname, "/template_engine/partials");

// SETUP TEMPLATE ENGINE
app.set("view engine", "hbs");
app.set("views", viewsDirectoryPath);
hbs.registerPartials(partialsDirectoryPath);

// SETUP STATIC FILE DIRECTORY
app.use(express.static(publicDirectoryPath));

// ROUTES
app.get("/", (req, res) => {
    res.render("coming_soon", {
        fileName: "coming_soon",
        title: "The Baker Bunch Photo Booth"
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        fileName: "404",
        title: "404 - Page Not Found"
    });
});

// CREATE SERVER
app.listen(port, () => {
    console.log(`Server Up And Running On Port: ${port}`);
});