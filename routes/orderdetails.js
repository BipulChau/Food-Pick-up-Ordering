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

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { address, fullname, phnumber } = req.body;

    // console.log (customer)


    let queryParams = [fullname, address, phnumber];
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
