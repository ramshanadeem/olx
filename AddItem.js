import React, {useState} from "react";
import { Link } from "react-router-dom";
import  ControlledCarousel from './ItemDescrip';
function AddItem(Props)
{
  if("placeholder" in Props)
  {
      return(
       <div>
         <Link to="/ControlledCarousel">
    <div className="add-item">
      
    <div className="poster anim placeholder">
         <figure>
        
           <img></img>
         </figure>
       </div>
      <div>
        <h4>car</h4>
        <h5>price:10000</h5>
      </div>
{/*      
       <div className="poster anim placeholder">
         <figure>
        
           <img></img>
         </figure>
       </div>
       <div  className="title anim placeholder">   
       <h1>car</h1>
       </div>
       <div className="tagline anim placeholder"></div>
       <div className="ftr anim flex">
       <div className="anim location placeholder"></div>
       <div className="anim stamp placeholder"></div>
       </div>
       */}

  </div> 
  </Link>  
  </div>
 
      )
  }
    return (
 <div className="add-item">
   < ControlledCarousel/> 
  </div>
    )
    }

export default AddItem;