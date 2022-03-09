import React, { useState } from "react";

const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Ahmed" },
    { id: 4, name: "Candice" },
];

const PropDrilling = () => {
    const [people, setPeople] = useState(data);

    // this is the function we will 'drill' as a prop down to the <Person /> component
    const removePerson = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        console.log(newPeople);
        setPeople(newPeople);
    };
    return (
        <div>
            <h2>Prop Drilling</h2>
            <List people={people} removePerson={removePerson} />
        </div>
    );
};

// components
const List = ({ people, removePerson }) => {
    return (
        <>
            {people.map((person) => (
                <Person
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    removePerson={removePerson}
                />
            ))}
        </>
    );
};

const Person = ({ id, name, removePerson }) => {
    return (
        <div>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
};
export default PropDrilling;
