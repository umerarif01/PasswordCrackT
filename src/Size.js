import { useState } from 'react';
import React from 'react';
import Check from './Check.js';

const Size = () => {
    
    const [ password, setPassword ] = useState('');

    return (
        <>
        <div className="main">
        <h1>How Long will it take to crack your Password!</h1>
        <div className="form-group mb-1">
        <input type="password" 
        placeholder="Enter your Password Here" 
        onChange={e => setPassword(e.target.value)}
        > 
        </input>
        </div>
        <Check password={password} />
        </div>
        
        </>
       );
}

export default Size
