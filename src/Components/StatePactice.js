import React, { useState } from 'react';

export const StatePractice = () => {

    // const [name, setName] = useState("Samad Akram");
    // const [email, setEmail] = useState("samadakram@gmailcom");

    const [arr, setArr] = useState(["Car"]);

    const handleClick = () => {
        // setName("Abdul Samad");
        // setEmail("abdul@gmail.com");
        setArr([...arr,"Bike","Truck"]);
    }

    return (
        <div>
            {/* <h1>{name}</h1>
            <h2>{email}</h2> */}

            <h3>{ arr }</h3>



            <button onClick={handleClick} >Update</button>
        </div>
    );
}