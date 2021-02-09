import React, { useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'

export const NavbarComponent = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Fragment>

            <Navbar color="faded" className="navbar-dark bg-primary">
                <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="/">Bootcamps</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="add-bootcamp">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </Fragment>
    )
}
