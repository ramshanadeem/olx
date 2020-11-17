import React,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";
function FooterPage()
{
  return (
    <React.Fragment>
      <div className="footer flex">
    <div className="block flex flex-col ">
        <h2 className="title s16 fontb color">Popular Categories</h2>
        <Link to="/" className="noul noulh font s14 color">Car</Link>
        <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
        <Link to="/" className="noul noulh font s14 color">Jobs</Link>
        <Link to="/" className="noul noulh font s14 color">Mobile Phone</Link>
    </div>

    <div className="block flex flex-col">
        <h2 className="title s16 fontb color">Trending Searches</h2>
        <Link to="/" className="noul noulh font s14 color">Car</Link>
        <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
        <Link to="/" className="noul noulh font s14 color">Jobs</Link>
        <Link to="/" className="noul noulh font s14 color">Mobile Phone</Link>
    </div>

    <div className="block flex flex-col">
        <h2 className="title s16 fontb color">About Us</h2>
        <Link to="/" className="noul noulh font s14 color">Car</Link>
        <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
        <Link to="/" className="noul noulh font s14 color">Jobs</Link>
        <Link to="/" className="noul noulh font s14 color">Mobile Phone</Link>
    </div>
    <div className="block flex flex-col">
        <h2 className="title s16 fontb color">OLX</h2>
        <Link to="/" className="noul noulh font s14 color">Car</Link>
        <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
        <Link to="/" className="noul noulh font s14 color">Jobs</Link>
        <Link to="/" className="noul noulh font s14 color">Mobile Phone</Link>
    </div>
    </div>
   <div className="footerb flex">
     <h2 className="cfff font s14">Other Countries India - South Africa - Indonesia</h2>
     <h2 className="r cfff font s14">Free Classifieds in Pakistan. © 2006-2020 OLX</h2>

   
  </div>
  
  </React.Fragment>
  )
}


export default FooterPage;