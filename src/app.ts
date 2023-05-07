import express, { Application } from "express";
import "express-async-errors";
import { handleErrors } from "./errors";
import { loginRoute } from "./routers/login.routes";
import { userRoutes } from "./routers/users.routes";
import { charsRoutes } from "./routers/chars.routes";
import { classesRoutes } from "./routers/classes.routes";
const cors = require("cors");
const app: Application = express();
app.use(express.json());

app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRoute);
app.use("/chars", charsRoutes);
app.use("/classes", classesRoutes);
app.use(handleErrors);
export default app;
