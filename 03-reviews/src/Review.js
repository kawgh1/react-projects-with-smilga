import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const handleBack = () => {
        if (index === 0) {
            setIndex(people.length - 1);
            return;
        }
        setIndex(index - 1);
    };

    const handleForward = () => {
        if (index === people.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    };

    // a bug on this is if you click super fast it will error out on render
    const handleRandom = () => {
        let randomPersonIndex = Math.floor(Math.random() * people.length);
        // make sure the random value isn't the same as index's current value
        if (randomPersonIndex === index) {
            randomPersonIndex++;
        }
        console.log(randomPersonIndex);
        setIndex(randomPersonIndex);
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={handleBack}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={handleForward}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={handleRandom}>
                Surprise Me
            </button>
        </article>
    );
};

export default Review;
