const express = require ("express")
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Korir@01",
    database: "socialapp",
    port: 3306
});

//routes
app.get('/', (req, res) => {
  res.render("index.ejs");
});
app.get("/users", (req, res) => {
    console.log(req.query.id);
    console.log(req.query.person);
    connection.query("SELECT * FROM users", (dberr, results) => {
        if (dberr) {
            return res.status(500).send("Error retrieving users: " + dberr.message);
        }
        res.render("users.ejs", { users: results });
    });
});
// app.get("/posts", (req, res) => {
//     connection.query("SELECT * FROM posts", (dberr, results) => {
//         if (dberr) {
//             return res.status(500).send("Error retrieving posts: " + dberr.message);
//         }
//         res.render("posts.ejs", { posts: results });
//     });
// });
//404
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

//Start the app
app.listen(3306, () => {
  console.log("App running on http://localhost:3306");
});
