import React from "react";
import "../Header/Header.css";
import Link from "../Link/Link"


const Header = ({ logo }) => (

    <header className="App-Header">
        <img src={logo} className="App-logo" alt='logo'/>
        <h3>
            Thank you for visiting and my GitHub information page
        </h3>
    </header>
)

export default Header;
