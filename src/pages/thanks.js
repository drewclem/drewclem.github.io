import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className='contact'>
      <div className='interior-anchor'></div>
      <h1 className="page-title">Contact</h1>
      <p style={{
        marginBottom: 40
      }}>Am I the droid you're looking for? Shoot me a quick email and we can chat about you're upcoming project! </p>

      <div className='form-wrapper'>
        <h1>Thanks for you message!</h1>
        <p>I'll do my absolute best to respond as quickly as I can!</p>

        <Link
          to='/'
          style={{
            color: 'var(--red)',
            marginTop: 100
          }}>Return to Homepage</Link>
      </div>

    </div>
  </Layout>
)

export default Contact
