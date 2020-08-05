import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from '../../Bootstrapplayer/Bootstrapplayer'
import OutlineButton from '../Button/OutlineButton'

const NavbarWrap = ({setIsAuthenticated,setCurrentPage}) => {
    return <>
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" onClick={() => setCurrentPage(1)}>Home</Nav.Link>
      <Nav.Link href="#Courses" onClick={() => setCurrentPage(2)}>Courses</Nav.Link>
      <Nav.Link href="#Students" onClick={() => setCurrentPage(3)}>Students</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <Nav.Link href="/" style={{ "color": "white" }} onClick={() => setIsAuthenticated(false)}>Logout</Nav.Link>
  </Navbar>
  </>
}
export default NavbarWrap