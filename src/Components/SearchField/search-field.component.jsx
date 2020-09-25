import React from 'react';
import './search-field.styles.css';

export const SearchField = ({placeholder, handleonchange}) => (
        <input 
        className="search" 
        type="search" 
        placeholder = {placeholder} 
        onChange= {handleonchange} 
        />
)