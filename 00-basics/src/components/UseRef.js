import React, { useEffect, useRef } from "react";

// useRef
//
// preserves value in between renders
// DOES NOT trigger a RE-RENDER
// targets DOM nodes/elements
//
// This is NOT a Controlled Input

const UseRef = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    };
    // console.log(refContainer); // null

    // auto-focus the input on initial render -> input is ready to type on page load
    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus();
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""></label>
                <input type="text" ref={refContainer} />
                <button type="submit">Submit</button>
            </form>
            <div ref={divContainer}></div>
        </div>
    );
};

export default UseRef;
