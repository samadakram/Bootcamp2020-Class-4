import React, { useState } from 'react';

export const StatePractice = () => {

    const [name, setName] = useState("Samad Akram");
    const [email, setEmail] = useState("samadakram@gmailcom");

    const handleClick = () => {
        setName("Abdul Samad");
        setEmail("abdul@gmail.com");
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <button onClick={handleClick} >Update</button>
        </div>
    );
}