import React from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <Link to="/developers">Developers</Link>
        <Link to="/supervisors">Supervisors</Link>
        <Link to="/companies">Companies</Link>
    </nav>
  )
}

export default Navbar
