//Imports
import express, { Express } from "express";
const user = require("./components/users/network");
const config = require("../config");

//Inicializa express
const app: Express = express();

//Routes
app.use("/api/user", user);

//Server listening
app.listen(config.api.port, () => {
  console.log(`Api corriendo en puerto ${config.api.port}`);
});
