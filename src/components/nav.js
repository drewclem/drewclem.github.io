import { Link } from "gatsby"
import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  constructor(props){
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      active: false
    }
  }

  toggleNav(){
      const currentstate = this.state.active
      this.setState({active: !currentstate})
  }

  render() {
    return (
      <div>
        <nav className={this.state.active ? 'nav-open' : 'nav-closed'}>
            <ul className='main-menu'>
              <li>
                <Link activeClassName='active' to='/projects/'>Projects</Link>
              </li>
              <li>
                <Link activeClassName='active' to='/about/'>About</Link>
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
              <a href='https://twitter.com/drewclemcr8' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={{width: 16}}/>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/drewclementscreative/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebook} style={{width: 16}}/>
              </a>
            </li>
            <li>
              <a href='https://github.com/drewclem' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} style={{width: 16}}/>
              </a>
            </li>
          </ul>
        </nav>
        <button  className='nav-toggle' onClick={this.toggleNav} style={{zIndex: 9999}}> 
          <FontAwesomeIcon icon={faBars}/>
        </button>
      </div>
    );
  }
}

export default Nav
