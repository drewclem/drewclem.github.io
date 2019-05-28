import React from "react"
//import { Link } from "gatsby"
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
        <h2>Get in touch</h2>
        <form action='/thanks/' data-netlify="true" name='contact' method='POST' netlify-honeypot="bot-field">
          <div>
            <label>Name</label>
            <input type='text' name='name' placeholder='A person has a name'/>
          </div>
          <div>
            <label>Email</label>
            <input type='text' name='email' placeholder=''/>
          </div>
          <div>
            <label>Message</label>
            <textarea rows='8' name='message' ></textarea>
          </div>
          <input name="bot-field" type='hidden'/>
          <input type="hidden" name="form-name" value="contact" />
          <button className='btn-red'>
            Send
          </button>
        </form>
      </div>

    </div>
  </Layout>
)

export default Contact
