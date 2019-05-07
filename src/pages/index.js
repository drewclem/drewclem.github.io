import React from "react"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import HomeSlider from "../components/carousel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='hero'>
      <div className='anchor'></div>
      <h1>Develo<br />per <span style={{color: 'var(--red)', fontSize: 124}}>&amp;</span> Design<br />er</h1>
      <h3>Drew Clements</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <HomeSlider className='homeSlider'/>

    <div className='heroCTA'>
      <p>Am I the droid you're looking for?</p>
      <button className='heroButton'>
        Message Me
        <div className="btn-dot"></div>
      </button>
    </div>
  </Layout>
)

export default IndexPage
