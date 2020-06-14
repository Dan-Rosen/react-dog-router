import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Navbar.Brand>
                    <Link className='Navigation' exact to='/dogs'>
                        Dog-Router
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        {this.props.dogs.map((dog) => (
                            <Nav.Link>
                                <NavLink
                                    className='Navigation'
                                    exact
                                    to={`/dogs/${dog.name}`}
                                >
                                    {dog.name}
                                </NavLink>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
