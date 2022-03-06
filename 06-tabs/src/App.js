import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
    const [jobs, setJobs] = useState([]);

    async function getJobs() {
        try {
            const response = await fetch(
                "https://course-api.com/react-tabs-project"
            );
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getJobs();
    }, []);

    console.log(jobs);

    return (
        <main>
            <div>
                {jobs.map((job) => (
                    <div key={job.id}>
                        <h1>{job.title}</h1>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default App;
