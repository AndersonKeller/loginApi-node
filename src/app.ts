import express, { Application } from "express";
import "express-async-errors";
import { handleErrors } from "./errors";
import { categoriesRoutes } from "./routers/categories.routes";
import { loginRoute } from "./routers/login.routes";
import { realEstateRoutes } from "./routers/realEstate.routes";
import { schedulesRouter } from "./routers/schedules.routes";
import { userRoutes } from "./routers/users.routes";

const app: Application = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoute);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRouter);

app.use(handleErrors);
export default app;
