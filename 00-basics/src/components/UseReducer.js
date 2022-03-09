import React, { useState, useReducer, useEffect } from "react";

// useReducer is used when there is a more complex setup with a Component State
// It is not necessary in simple or even compound components generally

// it is useful when you do NOT want a Component State to be updated willy nilly, but
// only when certain conditions are met - it will go through the reducer first to check,
// before updating State

// REDUCER Function
// should always return a new state
const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "ADD_ITEM") {
        const newPeople = [...state.personList, action.payload];
        return {
            ...state,
            personList: newPeople,
            isModalOpen: true,
            modalContent: "Person added",
        };
    }
    if (action.type === "NO_VALUE") {
        return {
            ...state,
            isModalOpen: true,
            modalContent: "Please enter a name",
        };
    }
    if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            isModalOpen: false,
        };
    }
    if (action.type === "REMOVE_PERSON") {
        const newPeople = state.personList.filter(
            (person) => person.id !== action.payload
        );
        return { ...state, personList: newPeople };
    }
    // default state
    // return state;
    throw new Error("no matching action type");
};

// STATE
const defaultState = {
    personList: [],
    isModalOpen: false,
    modalContent: "I'm a different modal",
};

// COMPONENT

const UseReducer = () => {
    const [name, setName] = useState("");
    // const [personList, setPersonList] = useState([]);
    // const [showModal, setShowModal] = useState(false);
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newPerson = { id: new Date().getTime().toString(), name };
            // dispatch action type: ADD_ITEM
            dispatch({ type: "ADD_ITEM", payload: newPerson });
            setName("");
        } else {
            dispatch({ type: "NO_VALUE" });
        }
    };

    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" });
    };

    return (
        <div>
            <h2>useReducer</h2>
            {state.isModalOpen && (
                <Modal
                    modalContent={state.modalContent}
                    closeModal={closeModal}
                />
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <button type="submit">add person</button>
            </form>
            <article>
                {state.personList.map((person) => (
                    <div
                        key={person.id}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <p>{person.name}</p>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_PERSON",
                                    payload: person.id,
                                })
                            }
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </article>
        </div>
    );
};

// this is a separate Component within the useReducer file.
const Modal = ({ modalContent, closeModal }) => {
    // close modal after 3 seconds
    // since its a useEffect, this function is called automatically when Modal is rendered
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });

    return (
        <div
            style={{
                border: "1px solid green",
                margin: "10px",
                padding: "10px",
                color: "green",
                fontWeight: 600,
            }}
        >
            {modalContent}
        </div>
    );
};

// This is the old way using useState to control State
// no reducer
/* 

const UseReducer = () => {
    const [name, setName] = useState("");
    const [personList, setPersonList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            setShowModal(true);
            const newPerson = {
                id: new Date().getTime().toString(),
                name: name,
            };
            setPersonList([...personList, newPerson]);
            setName("");
        } else {
            setShowModal(true);
        }
    };

    return (
        <div>
            <h2>useReducer</h2>
            {showModal && <Modal />}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <button type="submit">add person</button>
            </form>
            <article>
                {personList.map((person) => (
                    <div key={person.id}>{person.name}</div>
                ))}
            </article>
        </div>
    );
}; 
*/

// this is a separate Component within the useReducer file.
// const Modal = () => {
//     return (
//         <div
//             style={{
//                 border: "1px solid green",
//                 margin: "10px",
//                 padding: "10px",
//                 color: "green",
//                 fontWeight: 600,
//             }}
//         >
//             I'm a Modal
//         </div>
//     );
// };

export default UseReducer;
