import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/yellow">Yellow</Link>
            <Link to="/green">Green</Link>
            <Link to="/orange">Orange</Link>
            <Link to="/purple">Purple</Link>
            <Link to="/turquoise">Turquoise</Link>
        </footer>
    );
}
export default Footer;