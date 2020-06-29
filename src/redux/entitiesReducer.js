import orm from  './orm';

//This gives us a set of "tables" for our data, with the right structure
//Returns the empty database state
const initialState = orm.getEmptyState();

export default function entitiesReducer(state = initialState, action ){
    switch(action.type)
    {
        case 'PILOT_CREATE':
            const session = orm.session();
            const {Pilot} = session;

            Pilot.create(action.payload.pilotDetails);
            break;

        default: return state;
    }
}