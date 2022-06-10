import React from 'react';

export default function Product({category, name, description, price, thumb, restaurant, image}) {
    
  return (
      <div className="card" style={{minHeight: '300px', width: '350px', marginLeft: '20px', marginRight: '10px'}}>
          <div className="card-image">
              <figure className="image">
                  <img src={`http://localhost:1337${thumb}`}
                  style={{width: '350px', height: '170px'}} 
                  alt="Placeholder image"/>
              </figure>
              {/* <span className='tag has-text-left mx-1'>
                      {category}
                  </span> */}
          </div>
          <div className="card-content mt-4">
              <div className="media">
                  <div className="media-content mb-3">
                      <p className="title is-5"> {name}</p>
                      <div className="columns pb-4">
                          <div className="column is-5 is-size-6">
                              {price} so'm
                          </div>
                      </div>
                      {/* <div className='pb-2' > */}
                        <p className="subtitle is-7 mt-4">{restaurant}</p>
                        
                      {/* </div> */}
                  </div>
              </div>
          </div>
      </div>
  )
}


