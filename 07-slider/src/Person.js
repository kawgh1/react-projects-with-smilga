import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Person = ({ person, position, handlePrev, handleNext }) => {
    return (
        <article className={position} key={person.id}>
            <img src={person.image} alt={person.name} className="person-img" />
            <div className="btn-container">
                <button className="prev" onClick={handlePrev}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={handleNext}>
                    <FiChevronRight />
                </button>
            </div>
            <h4>{person.name}</h4>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight className="icon" />
        </article>
    );
};

export default Person;
