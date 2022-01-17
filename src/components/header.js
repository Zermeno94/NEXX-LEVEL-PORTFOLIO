import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
;
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
   return (
     <>
       <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
         <Navbar.Toggle aria-controls='responsive-navbar-nav' />
         <Navbar.Collapse id='responsive-navbar-nav'>
           <Nav className='mr-auto'>
             <Nav.Link href='/'>
               <i className='material-icons md-18'>Welcome to my Portfolio!</i>
             </Nav.Link>
             <NavDropdown title='About' id='basic-nav-dropdown'>

               <a href="#about"><NavDropdown.Item href='/about'>About me</NavDropdown.Item></a>
               

              <a href="#resume"><NavDropdown.Item href='/resume'>Resume</NavDropdown.Item></a>
               
               {/* <NavDropdown.Item href='/skills'>Skills</NavDropdown.Item> */}
               
             </NavDropdown>
             <Nav.Link href='/projects'>Projects</Nav.Link>
             <Nav.Link href='/contact'>Contact</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
     </>

   
   

   )
 }

export  default  Header

// Per BCS Assist:
// const Header = () => { <React.Fragment></React.Fragment>} export default 


