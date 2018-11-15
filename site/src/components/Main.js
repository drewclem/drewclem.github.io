import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>In the spirit of brevity I'll keep this short.</p>
          <p>I grew up loving art and knew I wanted a career creating. I love building things. I love challenges. I love learning. As a designer and developer I get to find and implement solutions to a variety of problems on a daily basis. I couldn't ask for a better career.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Having spent the last few years in an agency setting I've had the priviledge to work with an array of clients, ranging from local businesses to Fortune 500 corporations. The key to a good designer and developer is making sure each client, regardless of their size or budget, gets the same attention to detail in their projects.
            <br /><br/>Check out more of my work <a href="https://www.facebook.com/drewclementscreative/">here.</a>
          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>I'm a 31 year old new dad to a beautiful baby girl, Evelyn Rose. Her and her mother are my world. We have a doggo named Chief and he's a goofball. I spent seven years as a tattoo artist before returning to school for graphic design and web development.<br />
          <br />Since graduating with an Associates in 2016 I've been working with the great team at Third Wave Digital as the lead designer and video production assistant. In July of 2018 I officially transferred to the role of Junior Developer and Tech Support.<br />
          <br />I'm a simple guy who loves to create and build and development has given me the ability to do both in a challenging and rewarding way.
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/drewclemcr8" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/drewclementscreative/" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/drew-clements-172333158/" target="_blank" className="icon fa-linkedin"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main