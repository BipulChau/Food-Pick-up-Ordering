/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

var bodyParser = require("body-parser");

const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

module.exports = (db) => { // function being exported which is called at server.js using const orderRoutes
  router.post("/", (req, res) => {
    const { address, fullname, phnumber } = req.body; //{address: Toronto, fullname: Raman, phnumber: 1234567890}

    console.log (req.body)


    let queryParams = [fullname, address, phnumber]; //['Raman', 'Toronto', '12213213']
    console.log(queryParams);
    const query_text = `
      INSERT INTO customers(fullname, address, phnumber)
      VALUES($1, $2, $3) RETURNING *
      `;

    return pool.query(query_text, queryParams)
    .then(console.log("successfully inserted 🥳🐶"))
    .catch(err => console.log(err));

  });

  return router;
};
