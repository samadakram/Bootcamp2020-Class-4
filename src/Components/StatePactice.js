import React, { useState, useEffect } from 'react';

export const StatePractice = () => {

    // const [name, setName] = useState("Samad Akram");
    // const [email, setEmail] = useState("samadakram@gmailcom");

    // const [arr, setArr] = useState(["Car"]);
    // const [obj, setObj] = useState({
    //     name: "Akram Khan",
    //     email: "akram@gmail.com"
    // });

    // UseEffect Example (Life Cycle)

    const [name, setName] = useState("Samad");
    useEffect(() => {
        console.log("I will Run on Every Render");
    });

    const handleClick = () => {
        //Simple State
        // setName("Abdul Samad");
        // setEmail("abdul@gmail.com");

        // Calling Arayy in State
        // setArr([...arr,"Bike","Truck"]);

        // Calling Object in state
        // setObj({
        //     name: "Abdul Samad",
        //     email: "samad@gmail.com",
        //     ...obj,
        //     school: "Saylani"
        // });

        // UseEffect Example
        setName("Abdul Samad");

    }

    return (
        <div>
            {/* Simple State */}
            {/* <h1>{name}</h1>
            <h2>{email}</h2> */}

            {/* Array Example */}
            {/* <h3>{ arr }</h3> */}


            {/* Object Example */}
            {/* <h2>{obj.name}</h2>
            <h3>{obj.email}</h3>
            <h4>{obj.school}</h4> */}

            {/* UseEffect Example */}
            <h5>{name}</h5>



            <button onClick={handleClick} >Update</button>
        </div>
    );
}