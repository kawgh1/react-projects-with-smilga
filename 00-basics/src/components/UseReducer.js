import React from "react";

// useReducer is used when there is a more complex setup with a Component State
// It is not necessary in simple or even compound components generally

// it is useful when you do NOT want a Component State to be updated willy nilly, but
// only when certain conditions are met - it will go through the reducer first to check,
// before updating State

const UseReducer = () => {
    return <div>UseReducer</div>;
};

export default UseReducer;
