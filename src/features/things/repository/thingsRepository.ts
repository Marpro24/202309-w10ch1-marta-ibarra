import type Thing from "../../../types";
import things from "../data/things.js";

class ThingsRepository {
  public getThings(): Thing[] {
    return things;
  }

  public getThingsById(id: number): Thing | undefined {
    const thing = things.find((thing) => thing.id === +id);

    if (!thing) {
      throw new Error("not found");
    }

    return thing;
  }
}

export default ThingsRepository;
