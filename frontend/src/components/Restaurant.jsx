import React from 'react';

export default function Restaurant({ name, thumb}) {
    
  return (
      <div className="card" style={{minHeight: '300px', width: '350px', marginLeft: '20px', marginRight: '10px'}}>
          <div className="card-image">
              <figure className="image">
                  <img src={`http://localhost:1337${thumb}`}
                  style={{width: '350px', height: '170px'}} 
                  alt="Placeholder image"/>
              </figure>
          </div>
          <div className="card-content mt-4">
              <div className="media">
                  <div className="media-content mb-3">
                      <p className="title is-5"> {name}</p>
                      <div className="columns pb-4">
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}