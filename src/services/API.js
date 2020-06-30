import sampleData from '../data/sampleData';
import faker from 'faker';

const Ranks = ["Commander","Major","Captain","Lietenant","Sergeant","Corporal","Private"];
const Skills = ["Elite","Veteran","Regular"];
const Roles = ["Soldier","MechWarrior","Vessel Pilot","Gunner"];
const Genders = ["Male","Female","Other"];

function fetchSampleData()
{
    return Promise.resolve(sampleData);
}

function fetchPilots()
{
    return new Promise((resolve)=>{

        let pilots = [];
        for(let i=0;i < 100; i++)
        {

            let name = faker.name.findName();
            pilots.push({
                "id": 'P'+i,
                "name":name,
                "role": faker.random.number(Roles.length-1),
                "skill": faker.random.number(Skills.length-1),
                "rank": faker.random.number(Ranks.length-1),
                "gender": faker.random.number(Genders.length-1),
                "age": faker.random.number(40) + 20,
                "mech": faker.random.number(100),
                "lance": faker.random.number(10)
            })
        }
        resolve(pilots);

    });
}

export default {fetchPilots, Genders, Skills, Ranks, Roles};
