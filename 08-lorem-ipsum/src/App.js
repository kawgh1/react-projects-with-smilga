import React, { useState } from "react";
import data from "./data";
function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(data);

    const handleSubmit = (e, count) => {
        e.preventDefault();
        setCount(count);
        setText(data.slice(0, count));
    };

    return (
        <section className="section">
            <h3>lorem ipsum</h3>
            <form action="">
                <label htmlFor="amount">paragraphs:</label>
                <input
                    type="number"
                    value={count}
                    onChange={(e) => handleSubmit(count)}
                />
            </form>
            <div>
                {text.map((paragraph) => (
                    <p key={text.indexOf(paragraph)}>{paragraph}</p>
                ))}
            </div>
        </section>
    );
}

export default App;
