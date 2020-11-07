import React, { Component } from 'react';
import './App.css';
import './Props.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Modal.css';
import {BrowserRouter
  , Route,
   Link,
   Router} from "react-router-dom";
  
  
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


import Header from './comps/Header';
import HomePage from './comps/Home';
import FooterPage from './comps/Footer';
import Sign from './comps/Modal';
import  ControlledCarousel from './comps/ItemDescrip';
import AppRouter from './comps/router'
import {connect} from 'react-redux';
import reducer from './store/reducer';
import { render } from '@testing-library/react';
import {set_data} from './store/action'

//function App() {
  class App extends Component{
    render(){
    return (
 
    <BrowserRouter>
  
    <div>

    </div>
    <Header/>
   
    <AppRouter/>
 
   {/* <Route path="/" component={HomePage}></Route> 
  */}
    <FooterPage/>

     {/* <div>
     <button onClick={()=>this.props.set_data()}>set data</button>
   </div> */}
 </BrowserRouter> 
 
  );
    }
}
///const mapStateToProps =(state) => ({
  //  username: state.auth.username,
  //  email: state.auth.email,
  // app_name: state.app.app_name
 // }
//)
// const mapDispatchToProps = (dispatch)=> ({
//     set_data: ()=> dispatch(set_data())
//   })


export default App;
