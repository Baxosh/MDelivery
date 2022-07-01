import React from 'react';
import { Link } from 'react-router-dom';


export default function Restaurant({ name, image, id, typeofproduct, logo }) {

    return (
        <div >
        <div className="column">
            <Link to={`restaurant/${id}`}>
                <div className="card is-flex-wrap-wrap">
                    <div className="card-image-1">
                        <figure className="image-1">
                            <img src={`http://localhost:1337${image}`}
                                alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content-1">
                        <div className="media-1">
                            <div className="media-content-1">
                                <p className="title is-4">{name}</p>
                                {/* <br> */}
                                <p className="subtitle is-6">{typeofproduct}</p>
                            </div>

                        </div>
                        <div className="content-1">
                            <div className="media-left">
                                <figure className="image is-48x48">                                    
                                    <img src={`http://localhost:1337${logo}`}
                                        alt="Placeholder image" />                                    
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
            </Link>
        </div>
        <br />
        </div>

    )
}




