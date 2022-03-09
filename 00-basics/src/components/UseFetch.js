import { useState, useEffect } from "react";

// This is a custom hook use in CustomHookUseFetch.js

const UseFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
        setIsLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, [url]);

    console.log(products);

    return { isLoading, products };
};

export default UseFetch;
