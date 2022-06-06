const express = require("express");
const app = express();
const { Pool } = require('pg');
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const moment = require('moment');

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin",
  database: "postgres",
});

app.use(cors());
app.use(express.json());

app.post("/create-event", (req, res) => {
  const { title } = req.body;
  const { start } = req.body;
  const { end } = req.body;
  let SQL = "INSERT INTO public.barbearia(title, b_start, b_end) VALUES ($1, $2, $3)";
  pool.query(SQL, [title, start, end], (err, res) => {
    console.log("erro: "+err);
  });
});

app.get("/get-events", (req, res) => {
  
  let SQL = "SELECT * FROM barbearia"
  pool.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
  
})

app.listen(5000, () => { console.log("rodando na porta 5000") });