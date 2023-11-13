import { Router } from "express";
import things from "../data/things.js";

const thingsRouter = Router();

thingsRouter.get("/", (_req, res) => {
  res.status(200);
  res.json({ things });
});

thingsRouter.get("/:idThing", (req, res) => {
  const id = +req.params.idThing;

  const thing = things.find((thing) => thing.id === id);

  if (!thing) {
    res.status(404).json();
  }

  res.status(200).json(thing);
});

export default thingsRouter;
