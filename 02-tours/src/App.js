import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getTours() {
        setIsLoading(true);
        try {
            const response = await fetch(
                "https://course-api.com/react-tours-project"
            );
            const data = await response.json();
            console.log(data);
            setTours(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        getTours();
    }, []);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        console.log("ran remove tour");
        setTours(newTours);
    };

    return (
        <>
            {isLoading ? (
                <main>
                    <div className="title">
                        <h2>Our Tours</h2>
                        <div className="underline"></div>
                    </div>
                    <Loading />
                </main>
            ) : (
                <>
                    {tours.length ? (
                        <main>
                            <div className="title">
                                <h2>Our Tours</h2>
                                <div className="underline"></div>
                            </div>
                            <Tours tours={tours} removeTour={removeTour} />
                        </main>
                    ) : (
                        <main>
                            <div className="title">
                                <h2>Our Tours</h2>
                                <div className="underline"></div>
                                <br />
                                <br />
                                <h3>We're out of tours!!!</h3>
                                <button
                                    className="btn"
                                    onClick={() => getTours()}
                                >
                                    refresh
                                </button>
                            </div>
                        </main>
                    )}
                </>
            )}
        </>
    );
}

export default App;
