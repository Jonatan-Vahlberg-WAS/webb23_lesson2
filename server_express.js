const express = require("express");
const path = require("path");

// Gets the absolute dir of "dist"
const distDir = path.join(__dirname, "dist");
const staticDir = path.join(__dirname, "dist/static");

// Create a express app
const app = express();

// Adds directory to static files
app.use(express.static(staticDir));

// Handles requests to homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(distDir,"/index.html"))
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(distDir, "/contact.html"))
})


app.listen(3000, () => {
    console.log("Express server listening on port 3000")
})