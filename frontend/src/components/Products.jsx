import React from "react";
import Product from "./Product";
import {addProduct} from '../utils/addProduct'



export default function Products({ products }) {

    return (
        <div className="columns is-multiline is-centered">
            
            {products &&
                products.map((product) => (
                    <div key={product.id} className="column is-4">
                        
                        <Product
                            product={product}
                            // addProduct={() => addProduct({ cart, setCart, product, count })}
                            id={product.id}
                            category={
                                product.attributes.category.data.attributes
                                    .Title
                            }
                            restaurant={
                                product.attributes.restaurant.data.attributes
                                    .Title}
                            name={product.attributes.Name}
                            description={product.attributes.Description}
                            price={product.attributes.Price}
                            thumb={product.attributes.Image.data.attributes.url}
                        />
                        

                    </div>


                ))}
        </div>

    )
}



