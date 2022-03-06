## React Projects Starter APP

-   pulls an array of travel tours from an API and display them as Component Cards
-   [https://react-projects-2-tours.netlify.app/](https://react-projects-2-tours.netlify.app/)

### This was the only thing I didn't understand

        File: Tours.js
        ...


        const Tours = ({ tours, removeTour }) => {
        return (
            <>
                <section>
                    <div>
                        {tours.map((tour) => (
                            <Tour
                                key={tour.id}
                                // for some reason, doing it this way, removeTour function doesnt work
                                // image={tour.image}
                                // info={tour.info}
                                // name={tour.name}
                                // price={tour.price}
                                // spreading in props, removeTour function works
                                {...tour}
                                removeTour={removeTour}
                            />
                        ))}
                    </div>
                </section>
            </>
        );
    };

    export default Tours;
