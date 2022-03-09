import React, { useState } from "react";

// Javascript
// const input = document.getElementById('myText')
// const inputValue = input.value
//
// React
// value, onChange

// This example is really meant for forms that have 5-10 inputs or complex inputs
// like multiple select checkboxes, dropdown select, etc.

// dynamic object properties

const MultipleInputsForm = () => {
    // when you have a lot of inputs in a react form, it is cleaner to have only one state object
    // and only one function to update the object
    // instead of a const and function for each input

    // const [firstName, setFirstName] = useState("");
    // const [email, setEmail] = useState("");
    // const [age, setAge] = useState("");
    const [person, setPerson] = useState({ firstName: "", age: "", email: "" });
    const [personList, setPersonList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            const newPerson = {
                firstName: person.firstName,
                email: person.email,
                age: person.age,
            };
            newPerson.id = new Date().getTime().toString(); // set up cheat unique ID for rendering key
            console.log(newPerson);
            setPersonList([...personList, newPerson]);
            setPerson({ firstName: "", age: "", email: "" });
        } else {
            console.log("missing values");
        }
    };

    const handleChange = (e) => {
        // this is why you would set 'name' attribute on HTML input
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        setPerson({ ...person, [name]: value });
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
                            value={person.firstName}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={person.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="age">Age:</label>
                        <input
                            type="age"
                            id="age"
                            name="age"
                            value={person.age}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Add Person</button>
                </form>
            </article>
            <article>
                <h2>Person List</h2>
                <div>
                    {personList.map((person) => (
                        <p key={person.id}>
                            {person.firstName} -- {person.age} -- {person.email}
                        </p>
                    ))}
                </div>
            </article>
        </div>
    );
};

export default MultipleInputsForm;
