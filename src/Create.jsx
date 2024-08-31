import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { BsPlus } from 'react-icons/bs';

function Create() {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task })
            .then(result => {
                location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="form-container">
            <input 
                className='input' 
                type="text" 
                placeholder='Enter Task' 
                onChange={(e) => setTask(e.target.value)} 
            />
            <button className='button' type="button" onClick={handleAdd}>
                <BsPlus className='checkboxicon'/>
            </button>
        </div>
    );
}

export default Create;
