import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const getJobs = async () => {
        try {
            const response = await fetch(
                "https://course-api.com/react-tabs-project"
            );
            const data = await response.json();
            setJobs(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    // only get jobs once
    useEffect(() => {
        getJobs();
    }, []);

    // console.log(jobs);

    if (isLoading) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        );
    }

    // this code will not run until isLoading is false, therefore no conflict with API
    // default value = 0, so it will show first job
    const { company, dates, duties, title } = jobs[value];

    // notice to change the job display, we're just changing the value of 'value'
    // we don't touch the jobs array, we just change the index we're calling from it
    // this is elegantly simple - no new API calls for data,  no setting or resetting data objects or arrays

    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                {/* btn container */}
                <div className="btn-container">
                    {jobs.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${
                                    index === value && "active-btn"
                                }`}
                            >
                                {item.company}
                            </button>
                        );
                    })}
                </div>
                {/* job info */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className="job-desc">
                                <FaAngleDoubleRight className="job-icon" />
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
}

export default App;
