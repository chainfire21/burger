const mysql = require("mysql");
let connection;
//create mySQL connection information
if (process.env.NODE_ENV === 'production') {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    // connect to the mysql server and sql database
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected");
    });
}
else {
    // connection = mysql.createConnection({
    //     host: "localhost",
    //     port: 3306,
    //     user: "root",
    //     password: "",
    //     database: "burger_db"
    // });
    // // connect to the mysql server and sql database
    // connection.connect(function (err) {
    //     if (err) throw err;
    //     console.log("connected");
    // });
}

module.exports = function (app) {
    // Routes
    app.post("/api/burger",function(req,res){
        
    });
    app.get("/", function (req, res) {
        // connection.query(`SELECT people.name, people.photo, people.scores FROM people`,
        //     function (err, response) {
        //         if (err) throw err;
        //         const result = [];
        //         for (let j = 0; j < response.length; j++) {
        //             const person = {};
        //             person.name = response[j].name;
        //             person.photo = response[j].photo;
        //             person.scores = response[j].scores.split(",");
        //             result.push(person);
        //         };
        //         return res.json(result);
        //     });
        res.render("index");
    });

};