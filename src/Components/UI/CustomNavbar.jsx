import React  from 'react'
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap'
import Input from '../UI/Input'
import {Link} from 'react-router-dom'
import Modals from './Modals'
function CustomNavbar({setTitle,setRate}) {

  return (
    <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as= {Link} to = '/'>Home</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
       
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
      <Modals />
       <Input onChange={(e) => setTitle(e.target.value)} placeholder={'Search'}/>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default CustomNavbar