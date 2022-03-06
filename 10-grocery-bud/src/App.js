import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
    const [itemToAdd, setItemToAdd] = useState(""); // name of todo
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: "",
        type: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!itemToAdd) {
            // display alert
            showAlert(true, "danger", "Please Enter A Value");
        } else if (itemToAdd && isEditing) {
            // deal with edit

            // edit the item
            // make whatever
            setList(
                list.map((item) => {
                    if (item.id === editId) {
                        return { ...item, title: itemToAdd };
                    }
                    return item;
                })
            );
            showAlert(true, "warning", `${itemToAdd} updated!`);
            setIsEditing(false);
            setEditId(null);
            setItemToAdd("");
        } else {
            const newItem = {
                id: new Date().getTime().toString(),
                title: itemToAdd,
            };
            // show alert
            showAlert(true, "success", `${newItem.title} added!`);
            setList([...list, newItem]);
            setItemToAdd("");
        }
    };

    // setAlert
    // in parameters, we are looking for show, if not passed, default to false
    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg });
    };

    // Clear Items
    const clearList = () => {
        showAlert(true, "warning", "Empty List!");
        setList([]);
    };

    const removeItem = (id) => {
        // get item to remove
        const itemToRemove = list.find((item) => item.id === id);
        console.log(itemToRemove.title);
        // show alert
        showAlert(true, "danger", `${itemToRemove.title} removed!`);
        // remove item
        setList(list.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const itemToEdit = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditId(id);
        // grab list item and pass text into the main input field to edit text
        setItemToAdd(itemToEdit.title);
    };

    return (
        <section className="section-center">
            <form onSubmit={handleSubmit} className="grocery-form">
                {alert.show && (
                    <Alert {...alert} removeAlert={showAlert} list={list} />
                )}
                <h3>Grocery Bud</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        placeholder="ex. eggs"
                        value={itemToAdd}
                        onChange={(e) => setItemToAdd(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? "Edit" : "Submit"}
                    </button>
                </div>
            </form>

            {list.length > 0 && (
                <div className="grocery-container">
                    <List
                        items={list}
                        removeItem={removeItem}
                        editItem={editItem}
                    />
                    <button className="clear-btn" onClick={clearList}>
                        Clear Items
                    </button>
                </div>
            )}
        </section>
    );
}

export default App;
