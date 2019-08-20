import React from "react"
import Layout from "../components/layout"
import {Link} from '@reach/router'
// import Image from "../components/image"
import Slider from '../components/carousel'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='hero-wrapper'>
      <div className='hero'>
        <div className='anchor'></div>
        <h1>Develop<br />er <span>&amp;</span> Design<br />er</h1>
        <h3>Drew Clements</h3>
        <div className='sidebar'></div>
        <p>Hi! I'm just a dad trying to do right for his wife and daughter! I work as a designer at <a href='https://365degreetotalmarketing.com/'  target='_blank' rel='noopener noreferrer' style={{color: "var(--red)"}}>365 Total Marketing</a> and as a junior developer with <a href='https://www.designkollective.com' target='blank' rel='noopener noreferrer' style={{color: "var(--red)"}}>Design Kollective</a>. I spend my spare time exploring the JAMstack world and building <a href='https://coltxp.com' style={{color: "var(--red)"}} target='_blank' rel='noopener noreferrer'>ColtXP</a>.</p>
      </div>

      <div className='heroCTA'>
        <p>Am I the droid you're looking for?</p>
        <Link to='/contact'>
          <button className='btn-blue'>
            Message Me
            <div className="btn-dot"></div>
          </button>
        </Link>
      </div>

      <Slider />
    </div>
  </Layout>
)

export default IndexPage
