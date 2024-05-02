import React from "react";
import {
    Logo,
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./navbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
            <Bars />
                <Logo>
                    Intramuse
                </Logo>
                <NavMenu>
                    <NavLink to="/explore" >
                        For You
                    </NavLink>
                    <NavLink to="/post" activeStyle>
                        New Post
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;