import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./data";
import Person from "./Person";
function App() {
    const [data, setData] = useState(people);
    // note first item in array may not always be 0
    const [value, setValue] = useState(0);

    // console.log(data);

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

    return (
        <main className="section-center">
            <header>
                <h1>slider</h1>
            </header>

            <div>
                {data
                    .filter((person) => person.id === value)
                    .map((person) => (
                        <Person
                            key={person.id}
                            person={person}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                        />
                    ))}
            </div>
        </main>
    );
}

export default App;
