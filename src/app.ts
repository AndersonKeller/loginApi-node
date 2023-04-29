import express, { Application } from "express";
import "express-async-errors";
import { handleErrors } from "./errors";
import { loginRoute } from "./routers/login.routes";
import { userRoutes } from "./routers/users.routes";
const cors = require("cors");
const app: Application = express();
app.use(express.json());
app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});
app.use("/users", userRoutes);
app.use("/login", loginRoute);

app.use(handleErrors);
export default app;
