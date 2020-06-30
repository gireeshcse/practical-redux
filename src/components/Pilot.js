import React from 'react';

import API from '../services/API';

function Pilot(props)
{

    return (
       <tr>
           <td>{props.name}</td>
           <td>{props.age}</td>
           <td>{API.Genders[props.gender]}</td>
           <td>{API.Ranks[props.rank]}</td>
           <td>{API.Roles[props.role]}</td>
           <td>{API.Skills[props.skill]}</td>
       </tr>
    );
}

export default Pilot;