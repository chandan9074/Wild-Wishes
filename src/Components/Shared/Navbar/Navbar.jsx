import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


import './navbar.css'
const Navigations = () => {
    const {user, logout} = useAuth()

    // console.log("user hoto",user.photoURL);
    return ( 
        <div>
            <Navbar collapseOnSelect expand="lg" className="navColor">
                <Container>
                    <Navbar.Brand href="/"><Link to="/"  className="nav-title text-3xl">Wild Wishes</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ml-20">
                        <Nav.Link>
                        <Link to="/"  className="nav-btn text-xl md:ml-2">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/my-booking" className="nav-btn text-xl md:ml-2">My Bookings</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/manage-booking" className="nav-btn text-xl md:ml-2">Manage All Bookings</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/add-tour" className="nav-btn text-xl md:ml-2">Add New Tour</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav className="md:flex items-center">
                        {user.photoURL? <Nav.Link><img src={user.photoURL} alt="" className="w-10 rounded-full" /></Nav.Link>:null}
                            <Nav.Link className="text-xl text-white">{user.displayName}</Nav.Link>
                            {user.email? 
                            <Nav.Link>
                                <Link to="/"  className="sign-btn font-bold" onClick={logout}>Logout</Link>
                            </Nav.Link>:
                            <Nav.Link >
                                <Link to="/accounts"  className="sign-btn font-bold" onClick={logout}>Sing In</Link>
                            </Nav.Link>    
                        }
                        {/* <Nav.Link>More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Link to="/accounts" className="sign-btn font-bold">Sing In</Link>
                        </Nav.Link> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default Navigations;