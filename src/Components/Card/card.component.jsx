import React from 'react';
import './card.style.css';

export const Card = ({id,name, email}) => (
    <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    
)