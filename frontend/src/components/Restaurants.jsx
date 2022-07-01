import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { TYPEOFPRODUCTS } from "../utils/urls";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import TypeOfProduct from "./TypeOfProduct";


export default function Restaurants({ restaurants, products, setRestaurants}) {
    const [type_of_products, setTypeOfProducts] = useState([])

    useEffect(() => {
        axios
            .get(TYPEOFPRODUCTS)
            .then((res) => setTypeOfProducts(res.data.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <TypeOfProduct type_of_products={type_of_products} setTypeOfProducts={setTypeOfProducts} restaurants={restaurants} setRestaurants={setRestaurants} />
            <div className="title">
                <h1 className="title is-3">All Restaurants</h1>
            </div>
            
            <div className="columns container is-flex-wrap-wrap">

                {restaurants &&
                    restaurants.map((restaurant) => (

                        <div key={restaurant.id}>
                            <Restaurant
                                products={products}
                                name={restaurant.attributes.name}
                                id={restaurant.id}
                                image={restaurant.attributes.image.data[0].attributes.url}
                                typeofproduct={restaurant.attributes.type_of_products.data[0].attributes.title}
                                logo={restaurant.attributes.logo.data[0].attributes.url}
                            // category={restaurant.attributes.categories.data[0].attributes.title}
                            />
                            {/* {console.log(restaurant.attributes.type_of_products.data[0].attributes.title)} */}
                        </div>

                    ))}

            </div>
        
        </div>
    )
}



