import { type Request, type Response } from "express";
import things from "../data/things.js";

class ThingsController {
  public getThings(_req: Request, res: Response) {
    res.status(200);
    res.json({ things });
  }

  public getThingsById(req: Request, res: Response) {
    const id = +req.params.idThing;
    try {
      const thing = things.find((thing) => thing.id === id);
      res.status(200).json(thing);
    } catch {
      res.status(404).json();
    }
  }
}

export default ThingsController;
