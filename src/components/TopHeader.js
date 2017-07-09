import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
/* import Navbar from 'react-bootstrap/lib/Navbar';
 * import NavItem from 'react-bootstrap/lib/NavItem';
 * import MenuItem from 'react-bootstrap/lib/MenuItem';
 * import NavDropdown from 'react-bootstrap/lib/NavDropdown';
 * import Nav from 'react-bootstrap/lib/Nav'; */
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap/lib';

/* import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
 * import DropdownButton from 'react-bootstrap/lib/DropdownButton';
 * import MenuItem from 'react-bootstrap/lib/MenuItem';
 * import {} from '../redux/actions';
 */

class TopHeader extends Component {
    render() {
        return(
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Home</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        )
    }
}

export default TopHeader;
