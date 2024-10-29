import React from 'react'
import {Link} from 'react-router-dom'
import About from '../pages/About'

const NavBar = () => {
    return (
        <nav>
        <Link to="/"> Home </Link>
        <Link to="/blog"> Blog </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/about"> About </Link>
        </nav>
    )
}

export default NavBar;