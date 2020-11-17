import React,{useEffect, useState} from 'react';
import AddItem from "./AddItem";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
function HomePage()
{
  const[list, setList]= useState([]);
  const[loading, setLoading]=useState(true);

  useEffect(()=> {
    if(loading){
      let _list=[];
      for(let i=0; i <20 ; i++)
      {
         _list.push(<AddItem placeholder={true}/> );
      }
      setList(_list);
    }
   
  }, list );
 
 
    return (
    
      <React.Fragment>
 <div className="home-page ">
 
 <img className="homeImg" src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg"></img>
   <div className="add-list flex">
      {list}
      </div>
      <button className="load-more fontb c333 anim s20">Load More</button>
  
  <div className="app-ribbon flex aic">
    <div className="img">
      <img className="bl" src="//statics.olx.com.pk/external/base/img/phone-app.png"></img>
    </div>
    <div className="meta">
    <h2 className="title fontb s30 color">Try the OLX App</h2>
   <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile </h2>
  </div>
<div className="links">
  <h2 className="title fontb s30 color">Get Your App Today</h2>
  <div className="flex as">
  <a href="#" className="noul bl"><img src="//statics.olx.com.pk/external/base/img/appstore_2x.png"></img></a>
  <a href="#"  className="noul bl"><img src="//statics.olx.com.pk/external/base/img/playstore_2x.png"></img></a>
  </div>
</div>
</div>
</div>

 </React.Fragment>
    );
}

// class HomePage extends React.Component{
//   render(){
//     console.log("Props==>",this.props)
//   return (
//     <div>
    
//     </div>
//     );
//   }
// }
 
 
  //  email: state.auth.email,
  // app_name: state.app.app_name
 
export default HomePage;
//export default connect(mapStateToProps,null)(HomePage);