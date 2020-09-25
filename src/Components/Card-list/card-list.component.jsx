import React from 'react';

import {Card} from '../Card/card.component';
import './card-list.style.css';

export const CardList = (props) => 
{
    let monster = props.monster;
   return ( 
        <div className ="card-list">
            {monster.map(mons => <Card key={mons.id} id={mons.id} name={mons.name} email={mons.email}/>)}
        </div>
    )
};