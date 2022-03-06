#### IN ACTION

[https://react-projects-6-tabs.netlify.app/](https://react-projects-6-tabs.netlify.app/)

![tabs-2.png](https://raw.githubusercontent.com/kawgh1/react-projects-with-smilga/main/06-tabs/tabs-2.png)

-   get jobs data from API
-   display different job by tab

        // notice to change the job display, we're just changing the value of 'value'
        // we don't touch the jobs array, we just change the index we're calling from it
        // this is elegantly simple - no new API calls for data,  no setting or resetting data objects or arrays

        File: App.js
        ...
        const [value, setValue] = useState(0);
        const [jobs, setJobs] = useState([]);
        ...
        ...
        // call API, get jobs, setJobs, handle loading
        ...
        ...
        // default value = 0, so it will show first job
        const { company, dates, duties, title } = jobs[value];
        ...
        return(

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
        ...
        );

-   notice above too how we used template strings, index from map() and value from state to apply conditional rendering -> highlighting the active tab

![tabs.png](https://raw.githubusercontent.com/kawgh1/react-projects-with-smilga/main/06-tabs/tabs.png)

[Portfolio](https://gatsby-strapi-portfolio-project.netlify.app/)
