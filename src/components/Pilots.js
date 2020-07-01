import React from 'react';

import Pilot from './Pilot';

function Pilots(props)
{
    function renderPilots()
    {
        return props.pilots.map((pilot) => {
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