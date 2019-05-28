import React from "react"
//import { Link } from "gatsby"
import About1 from '../images/about1.jpg'
import About2 from '../images/about2.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className='interior-anchor'></div>
    <h1 className="page-title">About</h1>

    <p className='lead1'>Opportunity looks a lot like hard work.</p>

    <div className='about-block-1'>
      <div className='sidebar'></div>
      <img src={About1} alt='Me and my beautiful daughter, Evelyn.'/>
      <p>I like art. I love a challenge. Designing websites and writing code has both!<br />I started out as a <span style={{textDecoration: 'line-through'}}>musician in a hardcore band</span> graphic designer primarily working on logos, brochures, and business cards. During design school I was exposed to HTML &amp; CSS, and from there it pretty much snowballed into something I couldn't get enough of. When the opportunity to move into developer role presented itself at work, I jumped. I wasn't sure what the outcome was going to be, but I did know I would do everything within my power to make it work and to be successful at it.</p>
    </div>

    <p className='lead2'>A lot of this fell into place better than I could have ever planned it, but it didn't come without a lot of work.</p>

    <div className='about-block-2'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
      <img src={About2} alt='My wonderful wife and our amazing daughter.'/>
    </div>
  </Layout>
)

export default About
