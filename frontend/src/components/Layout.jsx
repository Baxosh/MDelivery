import React from 'react';
import Home from '../pages/Home';


export default function Layout({children}) {
  return (
      <div className="columns">
           <div className="column is-2 has-background-info-light">
               <Home />
           </div>
           <div className="column">
               {children}
           </div>
       </div>
  );
}
