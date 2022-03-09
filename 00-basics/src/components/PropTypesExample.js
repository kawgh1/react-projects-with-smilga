import React from "react";
import UseFetch from "./UseFetch";
// prop types - comes with create react app
import PropTypes from "prop-types";

const url = "https://course-api.com/javascript-store-products";

// in this example, some of our product objects from the API are missing their image or price

const PropTypesExample = () => {
    const { isLoading, products } = UseFetch(url);

    return (
        <div>
            <h2>Prop Types</h2>
            <section>
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </section>
        </div>
    );
};

// Product component
const Product = ({ fields }) => {
    // console.log(fields.image[0].url, fields.name, fields.price);

    // another way we can only load products that have an image url is say
    // const url = fields.image && fields.image[0].url;
    //
    // then in <img src={url || defaultImage} />

    return (
        <article>
            <h4>{fields.name}</h4>
            <img
                src={fields.image[0].url}
                alt={fields.name}
                height="200px"
                width="200px"
            />
            <h4>${fields.price.toLocaleString() + ".00"}</h4>
            <br />
            <br />
        </article>
    );
};

// Product Prop Types
Product.propTypes = {
    fields: PropTypes.shape({
        image: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string.isRequired, // to verify it is checking for 'url' inside an array inside the image property, change 'url' to 'green' and it will error
            })
        ),
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
};

// Default Props - if a product from API is missing one of these properties, use these default values
Product.defaultProps = {
    fields: PropTypes.shape({
        image: PropTypes.arrayOf(
            PropTypes.shape({
                url: "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif", // default image
            })
        ),
        name: "default name",
        price: 69.99,
    }),
};

export default PropTypesExample;
