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
      <p>I like art. I love a challenge. Designing websites and writing code have both!<br />I started out as a <span style={{textDecoration: 'line-through'}}>musician in a hardcore band</span> graphic designer primarily working on logos, brochures, and business cards. During design school, I was exposed to HTML &amp; CSS, and from there it pretty much snowballed into something I couldn't get enough of. When the opportunity to move into a developer role presented itself at work, I jumped. I wasn't sure what the outcome was going to be, but I did know I would do everything within my power to make it work and to be successful at it.<br />Ashton Kutcher made the comment that opportunity looks a lot like hard work. That saying has always resonated with really well and I've tried to hold myself to it by not missing any opportunity just because a little labor, physical or mental, may come with it.</p>
    </div>

    <p className='lead2'>One thing I've discovered though is that coding is a great teacher of patience.</p>

    <div className='about-block-2'>
      <p>I'll be the first one to admit that coding doesn't come to me easily. It's taken a lot of long nights and feeling lost in a sea of information to get to where I am. One thing I've discovered though is that coding is a great teacher of patience. The more I code, the better I get at problem-solving both in and outside of my work. Although, we all know that code is the teacher that never runs out of lessons.<br /> I've always been fascinated with how shapes and color can move people and provoke emotions or reactions. The challenge of translating that into usable and meaningful interfaces and products is something I've become very passionate about and I welcome any opportunity that allows me to dance to that measure. At the end of it all, I'm just a guy trying to do right by his wife and daughter.</p>
      <img src={About2} alt='My wonderful wife and our amazing daughter.'/>
    </div>
  </Layout>
)

export default About
