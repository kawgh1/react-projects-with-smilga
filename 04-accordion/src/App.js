import React, { useEffect, useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
    const [questions, setQuestions] = useState(data || []);

    useEffect(() => {
        setQuestions(data);
    }, []);

    console.log(questions);
    return (
        <main>
            <div className="container">
                <h3>Questions & Answers</h3>
                <section className="info">
                    {questions.map((question) => (
                        <SingleQuestion
                            key={question.id}
                            title={question.title}
                            info={question.info}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}

export default App;
