import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ name, price, thumb, restaurantName, restaurantId, restaurantLogo }) {
    return (

        <div className="column">
            <div className="card">
                <div className="card-image">
                    <Link to={`restaurant/${restaurantId}`}>
                        <figure className="image">
                            <img src={`http://localhost:1337${thumb}`}
                                alt="Placeholder image" />
                        </figure>
                    </Link>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content mt-3">
                            <p className="title is-5">{name}</p>
                            <p className="title is-6">{price} сум</p>
                            <p className="subtitle is-7">{restaurantName}</p>
                        </div>

                    </div>
                    <div className="content">
                        <div className="media-left">
                            <Link to={`restaurant/${restaurantId}`}>
                                <figure className="image is-48x48">
                                    <img src={`http://localhost:1337${restaurantLogo}`}
                                        alt="Placeholder image" />
                                </figure>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}





