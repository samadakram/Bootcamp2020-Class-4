import React, { useState } from 'react';

export const StatePractice = () => {

    const [name, setName] = useState("Samad Akram");
    const [email, setEmail] = useState("samadakram@gmailcom");

    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <button onClick={()=> setName("Abdul Samad")} >Update Name</button>
            <button onClick={()=> setEmail("abdul@gmail.com")} >Update Email</button>
        </div>
    );
}