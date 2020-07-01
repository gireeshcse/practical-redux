import orm from './orm';
import { createSelector } from "redux-orm";

export const pilots = createSelector(orm.Pilot);
export const battlemechs = createSelector(orm.Battlemech);
export const lances = createSelector(orm.Lance);

// Mapping model to their fields
export const pilotBattlemech = createSelector(orm.Pilot.mech);
export const pilotLance = createSelector(orm.Pilot.lance);
export const battlemechLance = createSelector(orm.Battlemech.lance);
export const pilotsOfLance = createSelector(orm.Lance.pilots);
export const mechsOfLance = createSelector(orm.Lance.mechs);

// chaining relationship accessors
export const battlemechLancePilots = createSelector(orm.Battlemech.lance.pilots);
export const pilotLanceBattlemechs = createSelector(orm.Pilot.lance.mechs);

// Map over collections using .map()

export const getNamesOfPilotsOfLance = createSelector(
    orm.Lance.pilots.map(orm.Pilot.name) // returns all names of pilot beloging to a certain lance
);

export default { 
    pilots, battlemechs, lances, pilotBattlemech, pilotLance,
    battlemechLance,pilotsOfLance, mechsOfLance, battlemechLancePilots,
    pilotLanceBattlemechs, getNamesOfPilotsOfLance
};