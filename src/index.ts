import "reflect-metadata";
import database from "./database";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import routes from "./routes";

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(routes)

database
  .createDatabaseConnection("local")
  .then(async (connection) => {
    // connection.dropDatabase()
    app.listen(process.env.PORT || 3333, () => {
      console.log(
        `Connected on "local" database and listening on port 3333.`
      )
    })
  })
  .catch((error) => {
    console.log(error)
  })