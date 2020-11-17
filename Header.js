import React, { useState,state,Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import {BsChevronCompactDown  } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {Button, Modal,NavDropdown, ButtonGroup,Dropdown,openModal,closeModal,Navbar,Nav, } from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal';
import {set_data,facebook_login} from '../store/action'
import {connect} from 'react-redux';
import Sign from '../comps/Modal';

 class Header extends React.Component{
 
    render()
    {
  
      console.log("propss==>",this.props)
//       state = {
//         isOpen: false
//       };
    
//       openModal = () => this.setState({ isOpen: true });
//       closeModal = () => this.setState({ isOpen: false });
// state = {
//     isOpen: false
//   };

 
      
        return(
            <div>
              {/* <nav className="navbar navbar-light bg-light  justify-content-between" > */}
              {/* <a className="navbar-brand" href="#">
             
      <img src={require("../images/olxlogo.png" )} width="50" />  

      </a> */}
        <div className="header fixed flex">
    <div className="logo">
    <img src={require("../images/olxlogo.png" )} width="50" />  
 </div>
 <div className="toplocation">
    <div className="location rel flex aic">
       <div className="icon-search ico s24" >
       <BiSearch/>
         </div>
           <input className="label s15 font"  placeholder="your location" value="Pakistan"/>
       <button className="icon-cherevon-down arro s24">
     <BsChevronCompactDown/>
       </button>
      </div>
     </div>
     <div className="topsearch">   
        <div style={{ width: "400px" }} className="search flex aic">
     <input  type="text" placeholder="find cars, mobile, phones and more..." className="query font s15" width="100"/>
        <button className="icon-search go s24 cfff " >
                  <BiSearch/>
</button>
      
       
 </div>
    </div>
    
     <div className="signintop">
     <div style={{ width: "300px" }} className="actions flex aic">
        <Link to="/account/signin" className=" color fontb s16 noulh noul"> Sign In </Link>

 <Sign/>
     {/* <button onClick={()=> this.props.set_data()}Setdata></button>  */}
     </div>
   </div>
   </div>
   {/*   </nav> */}
     
    
  <Navbar bg="light" expand="lg">
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="ALL CATEGORIES" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Vehicles</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Design</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Animals</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Furnitures</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Property for rent</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Mobile Phones</Nav.Link>
      <Nav.Link href="#link">Cars</Nav.Link>
      <Nav.Link href="#link">MotorCycles</Nav.Link>
      <Nav.Link href="#link">Houses</Nav.Link>
      <Nav.Link href="#link">TV-Video-Audio</Nav.Link>
      <Nav.Link href="#link">Tablets</Nav.Link>
      <Nav.Link href="#link">Land&Plots</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
        )
    }
  }    
 
//   const mapStateToProps =(state) => ({
//     users:state.users
//   })
//   const mapDispatchToProps = (dispatch) => ({
//  //set_data: () => dispatch(set_data()),
//  facebook_login: () => dispatch(facebook_login()),
//   })
// export default connect(mapStateToProps,mapDispatchToProps)(Header); 
 

  {/* //function Header() 

  //render()
//   const [modalShow, setModalShow] = React.useState(false);
//   const nav =[
//     {ID:1, label: "Mobile Phones"},
//     {ID:2, label: "Cars"},
//     {ID:3, label: "MotorCycles"},
//     {ID:4, label: "Houses"},
//     {ID:5, label: "T-V Video-Audio"},
//     {ID:6, label: "Tablets"},
//     {ID:7, label: "Lands & Plots"}

//   ];
//  return (
  
  
//       <React.Fragment>       
//  <div className="header fixed flex">
//    <div className="logo">
//    <img src={require("../images/olxlogo.png" )} width="50" />  
// </div>
// <div className="toplocation">
//    <div className="location rel flex aic">
//       <div className="icon-search ico s24" >
//       <BiSearch/>
//         </div>
//           <input className="label s15 font"  placeholder="your location" value="Pakistan"/>
//       <button className="icon-cherevon-down arro s24">
//       <BsChevronCompactDown/>
//       </button>
//      </div>
//     </div>
//     <div className="topsearch">
//      <div style={{ width: "400px" }} className="search flex aic">
//        <input  type="text" placeholder="find cars, mobile, phones and more..." className="query font s15" width="100"/>
//        <button className="icon-search go s24 cfff " >
//        <BiSearch/>
//        </button>
      
       
// </div>
//    </div>
//    <div className="signintop">
//      <div style={{ width: "300px" }} className="actions flex aic">
//        <Link to="/account/signin" className=" color fontb s16 noulh noul"> Sign In </Link>

//    <Button variant="primary" onClick={() => setModalShow(true)} className="sell flex color aic">
//    <h2 className="s18 fontb"> <AiOutlinePlus/>Sell</h2>
 
//       </Button>


//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />

//          <div className="plus-icon ico s24">
//           </div>
         
//        </div>
//        </div>
//        </div>
 
                                       {/* /____________________________/ */}
  // <div className="hnav fixed flex">
 
  // <button className="icon-cherevon-down arro s24">
     
  //     {['All Caterogy'].map(
  //   (variant) => (
  //     <DropdownButton
  //       as={ButtonGroup}
  //       key={variant}
  //       id={`dropdown-variants-${variant}`}
  //       variant={variant.toLowerCase()}
  //       title={variant}
  //     >
  //       <Dropdown.Item eventKey="1">Vehicles</Dropdown.Item>
  //       <Dropdown.Item eventKey="2"> Mobiles</Dropdown.Item>
  //       <Dropdown.Item eventKey="3" >
  //       Electronics & Home Appliances
  //       </Dropdown.Item>
  //       {/* <Dropdown.Divider /> */}
  //       <Dropdown.Item eventKey="4">Property for Sale</Dropdown.Item>
  //     </DropdownButton>
  //   ),
  // )}

//   </button>
//   {
    
//     nav.map(item =>{
//       return (
//      <Link to={"/browser/" + item.ID} className="noul noulh color bl font s15"  >{item.label}</Link>
//       )
//       }
//       )
//   }
//   </div>
//   <div className="hclr"></div>
//   </React.Fragment>
 
//     );

// }
export default Header;
// const mapStateToProps =(state) => ({
//   users:state.users
// })
// export default connect(mapStateToProps,null)(Header); */}
