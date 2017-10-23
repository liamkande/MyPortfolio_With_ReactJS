import React from 'react'
import GitIcon from 'react-icons/lib/fa/github'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import { NavLink } from 'react-router-dom'
import {  Navbar, NavDropdown, MenuItem} from 'react-bootstrap'


const NavBar = () =>

    <Navbar default collapseOnSelect fixedTop fluid >
      <Navbar.Header>
        <Navbar.Brand>
        <a href="/"  className="reactNav">Liam Kande | Web Developer</a>
        </Navbar.Brand>
        <Navbar.Toggle>
          <span className="reactNavList">Menu</span>
        </Navbar.Toggle>
      </Navbar.Header>
      <Navbar.Collapse>
        <ul className="nav navbar-nav navlist reactNavList">
          <li className="navlistitem"><NavLink exact to="/" activeStyle={{ color: 'black'}}>Home</NavLink></li>
          <li className="navlistitem"><NavLink to="/portfolio" activeStyle={{ color: 'black' }}>Portfolio</NavLink> </li>
         <NavDropdown title="Social Media" id="basic-nav-dropdown">
            <MenuItem className="text-center" href="https://github.com/liamkande"><GitIcon size={48} style={{color:"#337AB7"}} /></MenuItem>
            <MenuItem divider />
            <MenuItem className="text-center" href="https://www.linkedin.com/in/liamkande/"><LinkedInIcon size={48} style={{color:"#337AB7"}} /></MenuItem>
            <MenuItem divider />
            <MenuItem className="text-center" href="https://twitter.com/lkplaysmusic"><TwitterIcon size={48} style={{color:"#337AB7"}} /></MenuItem>
          </NavDropdown>
        </ul>
  </Navbar.Collapse>

</Navbar>


export default NavBar
