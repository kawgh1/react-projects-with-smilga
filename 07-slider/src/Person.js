import React from "react";

const Person = ({ person, handlePrev, handleNext }) => {
    return (
        <div className="card" key={person.id}>
            <div>
                <img
                    src={person.image}
                    alt={person.name}
                    className="person-img"
                />
                <div
                    className="btn-container"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <button onClick={handlePrev}>Left</button>
                    <button onClick={handleNext}>Right</button>
                </div>
                <h1>{person.name}</h1>
                <h3>{person.title}</h3>
                <p>{person.quote}</p>
            </div>
        </div>
    );
};

export default Person;
