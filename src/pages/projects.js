import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => (
  <Layout>

    <SEO title="Projects" />
    <div className='interior-anchor'></div>

    <h1 className="page-title">Projects</h1>

    <div className='project-item'>
      <h2>ColtXP</h2>

      <div className='project-copy'>
        <p>Colt is a place where beginners looking to gain real-world experience can pair with seasoned developers to work through github issues on live projects. Everyone starts at the bottom, but not everyone has someone to help them along the way. ColtXP's aim is to change that by giving juniors a place to find senior dev's willing to pay it forward.</p>

        <h3 style={{
          marginBottom: 10,
          fontSize: 18
        }}>Tech:</h3>

        <ul>
          <li>ReactJS</li>
          <li>Firebase</li>
          <li>CSS</li>
        </ul>

        <a href='https://coltxp.com' className='btn-red' target='_blank' rel='noopener noreferrer'>View</a>

        <a href='www.github.com' className='github' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon className='github' icon={faGithub}/>
        </a>
      </div>
    </div>

    <div className='project-item'>
      <h2>TiftonHog</h2>

      <div className='project-copy'>
        <p>Tiftonhoggroup.com is a small members site for a Harley's Owner Group in South Georgia. The challenge with this design was to take the limited amount of content and present it in a pleasing way that didn't leave the page feeling empty. The solution was to highlight the aspects they enjoy the most - recent rides, upcoming events, and the bond they share with the other members.</p>

        <h3 style={{
          marginBottom: 10,
          fontSize: 18
        }}>Tech:</h3>

        <ul>
          <li>Coldfusion</li>
          <li>HTML &amp; CSS</li>
          <li>MySql</li>
        </ul>

        <a href='http://www.tiftonhoggroup.com' className='btn-red' target='_blank' rel='noopener noreferrer'>View</a>
      </div>
    </div>

    <div className='project-item'>
      <h2>LokaySun</h2>

      <div className='project-copy'>
        <p>This was a fun project from the <a href='https://freecodecamp.com' target='_blank' rel='noopener noreferrer' style={{color: 'var(--red)', textTransform: 'lowercase'}}>freecodecamp</a> curriculum. This project allows a user to see the temperature and weather condition of their positioning using javascript's geolocation and a weather map API and also lets the user toggle between Farenheit and Celsius. This was my first tango with using an API with javascript so there was a steep learning curve in getting the two to work together. I learned a lot in this process and wrote a tutorial about the process in a blog <a href='https://medium.com/@drewclementsdesign/building-a-weather-app-with-vanilla-javascript-920889a78ca2' target='_blank' rel='noopener noreferrer' style={{color: 'var(--red)', textTransform: 'lowercase'}}>here</a>. I've since moved the article here locally, but the original article continues to receive reads and reactions.</p>

        <h3 style={{
          marginBottom: 10,
          fontSize: 18
        }}>Tech:</h3>

        <ul>
          <li>Javascript</li>
          <li>HTML &amp; CSS</li>
          <li>Weather Map API</li>
        </ul>

        <a href='https://coltxp.com' className='btn-red' target='_blank' rel='noopener noreferrer'>View</a>

        <a href='www.github.com' className='github' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon className='github' icon={faCodepen}/>
        </a>
      </div>
    </div>

  </Layout>
)

export default Projects
