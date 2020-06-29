import { Model, fk, oneToOne, many, attr } from "redux-orm";

export class Pilot extends Model{
    static reducer(action, Pilot, session)
    {
        switch(action.type)
        {
            case 'PILOT_CREATE':
                Pilot.create(action.payload.pilotDetails);
                break;
            default:
                return session.state;
        }
    }
}
Pilot.modelName = "Pilot";
Pilot.fields = {
    mech : fk("Battlemech"), // One-to-Many
    lance : oneToOne("Lance"),
    name : attr() // Optional not required
};

export class Battlemech extends Model{}
Battlemech.modelName = "Battlemech";
Battlemech.fields = {
    pilot : fk("Pilot"),
    lance : oneToOne("Lance"),
};

export class Lance extends Model {}
Lance.modelName = "Lance";
Lance.fields = {
    mechs : many("Battlemech"),
    pilots : many("Pilot")
}

