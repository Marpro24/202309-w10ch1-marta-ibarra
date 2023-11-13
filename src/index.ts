import morgan from "morgan";
import "dotenv/config";
import { notFound } from "./features/middleware/error/errorMiddleware.js";
import thingsRouter from "./features/things/router/thingsRouter.js";
import app from "./app.js";

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.use(notFound);
