import { ORM } from "redux-orm";
import { Pilot, Battlemech, Lance } from "./models";

const orm = new ORM({
    stateSelector: state => state.orm 
});
orm.register(Pilot, Battlemech, Lance);

export default orm;