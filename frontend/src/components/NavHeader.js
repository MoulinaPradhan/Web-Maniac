import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown ,FormControl,Form,Button} from 'react-bootstrap'
const NavHeader = () => {
    return (
        <>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img 
               width=""
               height="50"
               className="d-inline-block align-top"
               alt="React Bootstrap logo"
              src ="https://equinox.iiitl.ac.in/img/equinox_logo_white.png"/>
              {/* Equinox Hub */}
              </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
           
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
        </>
    )
}

export default NavHeader
