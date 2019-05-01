import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = ({ siteTitle }) => (
  <header>
    <div className='nav-content'>
      <h1>
        <Link to="/">dC</Link>
      </h1>
      <nav>
        <ul className='main-menu'>
          <li>
            <Link activeClassName='active' to='/about/'>About</Link>
          </li>
          <li>
            <Link activeClassName='active' to='/projects/'>Projects</Link>
          </li>
          <li>
            <Link activeClassName='active' to='/blog/'>Blog</Link>
          </li>
          <li>
            <Link activeClassName='active' to='/contact/'>Contact</Link>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a href='/' target='_blank'>
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
