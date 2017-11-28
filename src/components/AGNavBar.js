import React, { Component } from 'react';
import { MenuItem, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

class AGNavBar extends Component {
    render() {        
        return(
          <Navbar className="AG-NavBar" inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand className="Business-Name">
                <a href="#">Agent Galaxy</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavDropdown eventKey={3} title="Buying" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>View Our Auctions</MenuItem>
                  <MenuItem eventKey={3.2}>Buying Tips</MenuItem>
                  <MenuItem eventKey={3.3}>Buying Checklists</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Contact Our Specialist</MenuItem>
                </NavDropdown>
                <NavItem eventKey={2} href="#">Renting</NavItem>
                <NavItem eventKey={1} href="#">Selling</NavItem>
              </Nav>
              {/* <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
              </Nav> */}
            </Navbar.Collapse>
          </Navbar>
      )
  }
}

export default AGNavBar;