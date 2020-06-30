import React, {useState, useEffect} from 'react';

import API from '../services/API';
import Pilot from './Pilot';

function Pilots()
{
    const [Pilots, setPilots] = useState([]);

    if (Pilots.length === 0)
    {
        API.fetchPilots().then((data)=>{
            setPilots(data);
        });
    }

    function renderPilots()
    {
        return Pilots.map((pilot) => {
            return <Pilot key={pilot.id} {...pilot} />
        })
    }

    return (
        <table className="table table-reponsive">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Rank</th>
                    <th>Role</th>
                    <th>Skill</th>
                </tr>
            </thead>
            <tbody>
                {renderPilots()}
            </tbody>
        </table>
    );
}

export default Pilots;