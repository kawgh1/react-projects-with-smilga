import React, { useState, useEffect } from "react";
// custom hook
import UseFetch from "./UseFetch";

const url = "https://course-api.com/javascript-store-products";

const CustomHookUseFetch = () => {
    // UseFetch returns an object and takes a url as a parameter
    const { isLoading, products } = UseFetch(url);

    return (
        <div>
            <h3>Custom Hook UseFetch</h3>
            <h4>Products</h4>
            <div>
                {isLoading ? (
                    <h2>"loading..."</h2>
                ) : (
                    <div>
                        {products.map((product) => (
                            <div key={product.id}>
                                <h4>{product.fields.name}</h4>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomHookUseFetch;
