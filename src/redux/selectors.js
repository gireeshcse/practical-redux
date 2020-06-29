import orm from './orm';
import { createSelector } from "redux-orm";

const pilots = createSelector(orm.Pilot);
const battlemechs = createSelector(orm.Battlemech);
const lances = createSelector(orm.Lance);

// Mapping model to their fields
const pilotBattlemech = createSelector(orm.Pilot.mech);
const pilotLance = createSelector(orm.Pilot.lance);
const battlemechLance = createSelector(orm.Battlemech.lance);
const pilotsOfLance = createSelector(orm.Lance.pilots);
const mechsOfLance = createSelector(orm.Lance.mechs);

// chaining relationship accessors
const battlemechLancePilots = createSelector(orm.Battlemech.lance.pilots);
const pilotLanceBattlemechs = createSelector(orm.Pilot.lance.mechs);

// Map over collections using .map()

const getNamesOfPilotsOfLance = createSelector(
    orm.Lance.pilots.map(orm.Pilot.name) // returns all names of pilot beloging to a certain lance
);

export default { 
    pilots, battlemechs, lances, pilotBattlemech, pilotLance,
    battlemechLance,pilotsOfLance, mechsOfLance, battlemechLancePilots,
    pilotLanceBattlemechs, getNamesOfPilotsOfLance
};