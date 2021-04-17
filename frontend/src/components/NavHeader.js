import React,{useEffect,useState} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown ,FormControl,Form,Button} from 'react-bootstrap'
import SearchBox from './SearchBox'
const NavHeader = () => {
  const [userInfo,setuserInfo] = useState(false)
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
              <SearchBox/>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
           
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
        </>
    )
}

export default NavHeader
