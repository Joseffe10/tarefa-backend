import "reflect-metadata";
//import database from "./database";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import routes from "./routes";

const app = express()
createConnection()
app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('🏃 Running Server');
});

/*
database
  .createDatabaseConnection("local")
  .then(async (connection) => {
    console.log('Conectado com o BD Postgres!')
  })
  .catch((error) => {
    console.log(error)
  })
  */

