import axios from 'axios';
import React from 'react';
import { RESTAURANTS } from '../utils/urls';

export default function TypeOfProduct({ type_of_products, setRestaurants }) {
    const filter = (item) => {
        axios
            .get(RESTAURANTS +
                `&filters[type_of_products][id][$eq]=${item.id}`
            )
            .then((response) => setRestaurants(response.data.data))
            .catch((err) => console.log(err))
    }

    return (
        <div className="field">
            {type_of_products && type_of_products.map(type_of_product => (
                <div className="buttons are-normal" key={type_of_product.id}>
                    <button className="button is-success is-outlined"
                        onClick={() => filter(type_of_product)}>
                        {type_of_product.attributes.title}
                    </button>
                </div>
            ))}
        </div>
    )
}
