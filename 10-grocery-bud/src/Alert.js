import React, { useEffect } from "react";

// why did we pass list?

// So we can use list as a dependency of the Alert useEffect
// this makes sure the each alert is displayed a full 3 seconds
// because it gets called again if list is updated

const Alert = ({ type, msg, removeAlert, list }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);

        // clean up function
        return () => clearTimeout(timeout);
    }, [list]);

    return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
