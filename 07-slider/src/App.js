import React, { useState, useEffect } from "react";
import people from "./data";
import Person from "./Person";
function App() {
    const [data, setData] = useState(people);
    // note first item in array may not always be 0
    const [value, setValue] = useState(0);

    // console.log(data);

    // static buttons - slider only changes on click
    const handleNext = () => {
        if (value === data.length - 1) {
            setValue(0);
            return;
        }
        setValue(value + 1);
    };

    const handlePrev = () => {
        if (value === 0) {
            setValue(data.length - 1);
            return;
        }
        setValue(value - 1);
    };

    // automatic slider - changes every 5 seconds using useEffect and setInterval
    useEffect(() => {
        const lastValue = data.length - 1;
        if (value < 0) {
            setValue(lastValue);
        }
        if (value > lastValue) {
            setValue(0);
        }
    }, [value, data]);

    useEffect(() => {
        let slider = setInterval(() => {
            setValue(value + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [value]);

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className="section-center">
                {data.map((person, personIndex) => {
                    let position = "nextSlide";
                    if (personIndex === value) {
                        position = "activeSlide";
                    }
                    if (
                        personIndex === value - 1 ||
                        (value === 0 && personIndex === data.length - 1)
                    ) {
                        position = "lastSlide";
                    }

                    return (
                        <article className={position}>
                            <Person
                                className={position}
                                key={person.id}
                                person={person}
                                handleNext={handleNext}
                                handlePrev={handlePrev}
                            />
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default App;
