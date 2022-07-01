import React, { useState, useEffect } from "react";
import Product from "./Product";
import { addProduct } from '../utils/addProduct'



export default function Products({ products }) {

    return (
        <div className="columns container is-flex-wrap-wrap">


            {products &&
                products.map((product) => (
                    <div key={product.id}>

                        <Product
                            id={product.id}
                            restaurantName={product.attributes.restaurant && product.attributes.restaurant.data && product.attributes.restaurant.data.attributes.name}
                            name={product.attributes.Name}
                            description={product.attributes.Description}
                            price={product.attributes.Price}
                            thumb={product.attributes.Image.data.attributes.url}
                            typeofproduct={product.attributes.type_of_product.data.attributes.title}
                            // restaurantImage={product.attributes.restaurant && product.attributes.restaurant.data && product.attributes.restaurant.data.attributes.image.data[0].attributes.url}
                            restaurantId={product.attributes.restaurant.data && product.attributes.restaurant.data.id}
                            restaurantLogo={product.attributes.restaurant.data && product.attributes.restaurant.data.attributes.logo.data[0].attributes.url} />

                        {/* {console.log(product.attributes.restaurant.data && product.attributes.restaurant.data.attributes.logo.data[0].attributes.url)} */}
                    </div>


                ))}
        </div>

    )
}



