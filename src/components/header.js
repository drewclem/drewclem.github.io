import { Link } from "gatsby"
import React from "react"
import Nav from './nav'

const Header = ({ siteTitle }) => (
  <header>
    <div className='nav-content'>
      <h1>
        <Link to="/">dC</Link>
      </h1>
      <Nav />
    </div>
  </header>
)

export default Header
