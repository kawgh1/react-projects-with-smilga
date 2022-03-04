import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
    return (
        <>
            <section>
                <div>
                    {tours.map((tour) => (
                        <Tour
                            key={tour.id}
                            // for some reason, doing it this way, removeTour doesnt work
                            // image={tour.image}
                            // info={tour.info}
                            // name={tour.name}
                            // price={tour.price}
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
