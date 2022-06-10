import React from "react";
import Restaurant from "./Restaurant";
import {addProduct} from '../utils/addProduct'



export default function Restaurants({ restaurants }) {

    return (
        <div className="columns is-multiline is-centered">
            
            {restaurants &&
                restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="column is-4">
                        
                        <Restaurant
                            restaurant={restaurant}
                            name={restaurant.attributes.Name}
                            id={restaurant}
                            
                            // thumb={restaurant.attributes.Image.data.attributes.url}
                            />
                            {console.log(restaurant.attributes.id)}
                    </div>
                ))}
        </div>

    )
}



