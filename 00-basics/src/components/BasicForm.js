import React, { useState } from "react";

// Javascript
// const input = document.getElementById('myText')
// const inputValue = input.value
//
// React
// value, onChange

const BasicForm = () => {
    //
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [personList, setPersonList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = { firstName: firstName, email: email };
            person.id = new Date().getTime(); // set up cheat unique ID for rendering key
            console.log(person);
            setPersonList([...personList, person]);
            setEmail("");
            setFirstName("");
        } else {
            console.log("missing values");
        }
    };

    return (
        <div>
            <h2>Basic Form</h2>
            <h3>Controlled Inputs</h3>
            <article>
                {/* on a form you can do <form onSubmit={}> or do onClick on the button */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <button type="submit">Add Person</button>
                </form>
            </article>
            {/* DONT USE THE ARRAY INDEX AS THE KEY B/C IF YOU DELETE A USER IT BREAKS THINGS */}
            <article>
                <h2>Person List</h2>
                <div>
                    {personList.map((person) => (
                        <p key={person.id}>
                            {person.firstName} - {person.email}
                        </p>
                    ))}
                </div>
            </article>
        </div>
    );
};

export default BasicForm;
