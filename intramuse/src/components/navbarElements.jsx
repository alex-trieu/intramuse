// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Logo = styled.nav`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: left;
    vertical-align: center;
    color: #FFFFFF;
`;

export const Nav = styled.nav
`
    background: rgb(59, 43, 74);
    height: 20px;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    padding: 25px;
    padding-right: 40px;
    padding-left: 30px;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #FFFFFF;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    &.active {
        font-weight: bold;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #FFFFFF;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
