import React, { useState, useContext } from "react";

/* 
    THIS IS AN EXAMPLE OF USING CONTEXT API FOR THE PropDrilling.js Component
*/

const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Ahmed" },
    { id: 4, name: "Candice" },
];

// Context
const AppContext = React.createContext();
// access to two components - Provider, Consumer

const ContextAPI = () => {
    const [people, setPeople] = useState(data);

    // this is the function we will pass using Context down to the <Person /> component
    const removePerson = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        console.log(newPeople);
        setPeople(newPeople);
    };
    return (
        <AppContext.Provider value={{ removePerson }}>
            <h2>Context API</h2>
            <List people={people} />
        </AppContext.Provider>
    );
};

// components
const List = ({ people }) => {
    return (
        <>
            {people.map((person) => (
                <Person key={person.id} id={person.id} name={person.name} />
            ))}
        </>
    );
};

const Person = ({ id, name }) => {
    const { removePerson } = useContext(AppContext);

    return (
        <div style={{ flexDirection: "row" }}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
};

export default ContextAPI;
