import React,{ Component } from 'react'
import { Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import GitIcon from 'react-icons/lib/fa/github'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square'
import TwitterIcon from 'react-icons/lib/fa/twitter'

class NavBar extends Component {
  handleClickOne = () => {
    window.location.href = "#/"
  }
  handleClickTwo = () => {
    window.location.href = "#/portfolio"
  }

  render() {
    let activeNumb = this.props.activeNumb
    var style = {
    color: "#337AB7"
  }
    return (
      <Navbar default collapseOnSelect fixedTop fluid >
    	    <Navbar.Header>
    	      <Navbar.Brand>
    	     	<a href="#/"  className="reactNav">Liam Kande | Web Developer</a>
    	      </Navbar.Brand>
    	      <Navbar.Toggle>
    					<span className="reactNavList">Menu</span>
    				</Navbar.Toggle>
    	    </Navbar.Header>
    	    <Navbar.Collapse>
          <Nav activeKey={activeNumb} className="reactNavList ">
            <NavItem eventKey={1} onClick={this.handleClickOne}>Home</NavItem>
            <NavItem eventKey={2} onClick={this.handleClickTwo}>Portfolio</NavItem>
            <NavDropdown eventKey={3} title="Social Media" id="basic-nav-dropdown">
              <MenuItem className="text-center" eventKey={3.1} href="https://github.com/liamkande"><GitIcon size={48} style={style} /></MenuItem>
              <MenuItem divider />
              <MenuItem className="text-center" eventKey={3.2} href="https://www.linkedin.com/in/liamkande/"><LinkedInIcon size={48} style={style}/></MenuItem>
              <MenuItem divider />
              <MenuItem className="text-center" eventKey={3.3} href="https://twitter.com/lkplaysmusic"><TwitterIcon size={48} style={style}/></MenuItem>
              </NavDropdown>
          </Nav>
    	    </Navbar.Collapse>
    	  </Navbar>
    )
  }
}

export default NavBar;
