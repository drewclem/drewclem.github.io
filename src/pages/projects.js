import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="interior-anchor" />

    <h1 className="page-title">Projects</h1>
    <div className="project-item">
      <h2>Protege.dev</h2>

      <div className="project-copy">
        <p>
          Protege.dev is a job board tailored for junior developers looking for
          remote opportunities. This project has end-to-end testing with
          Crypress.io, form validation with Formik and Yup, and wired up to a
          Firebase database for the back-end.
        </p>

        <h3
          style={{
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Tech:
        </h3>

        <ul>
          <li>React</li>
          <li>Firebase</li>
          <li>Tailwind CSS</li>
          <li>Cypress.io</li>
        </ul>

        <a
          href="https://protege.dev"
          className="btn-red"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>

        <a
          href="https://github.com/drewclem/protege"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="github" icon={faGithub} />
        </a>
      </div>
    </div>

    <div className="project-item">
      <h2>ColtXP</h2>

      <div className="project-copy">
        <p>
          Colt is a place where beginners looking to gain real-world experience
          can pair with seasoned developers to work through github issues on
          live projects. Everyone starts at the bottom, but not everyone has
          someone to help them along the way. ColtXP's aim is to change that by
          giving juniors a place to find senior dev's willing to pay it forward.
        </p>

        <h3
          style={{
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Tech:
        </h3>

        <ul>
          <li>Vue/Nuxt</li>
          <li>Firebase</li>
          <li>Tailwind CSS</li>
        </ul>

        <a
          href="https://coltxp.com"
          className="btn-red"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>

        <a
          href="https://github.com/drewclem/Colt"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="github" icon={faGithub} />
        </a>
      </div>
    </div>

    <div className="project-item">
      <h2>FNF APP</h2>

      <div className="project-copy">
        <p>
          The FNF app is a full-stack project with a Node API hosted on heroku
          and a Gatsby front-end hosted on Netlify. The goal of this project was
          to build a read-only API and display the data on a separately hosted
          front-end.
        </p>

        <h3
          style={{
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Tech:
        </h3>

        <ul>
          <li>Node | Express</li>
          <li>GatsbyJS | React</li>
          <li>Tailwind CSS</li>
        </ul>

        <a
          href="http://fnfapp.com"
          className="btn-red"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>

        <a
          href="https://github.com/drewclem/fast-and-furious-frontend"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Front-end Repo
        </a>

        <a
          href="https://github.com/drewclem/Fast-and-Furious-API"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Repo
        </a>
      </div>
    </div>

    <div className="project-item">
      <h2>Layerframe</h2>

      <div className="project-copy">
        <p>
          A fun code assessment style project using NextJS and Framer-motion to
          build an interesting opening animation. The goal was to create an
          intro scene that would be a delight to the user while data is being
          loaded.
        </p>

        <h3
          style={{
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Tech:
        </h3>

        <ul>
          <li>NextJS | React</li>
          <li>Tailwind CSS</li>
          <li>Framer-motion</li>
        </ul>

        <a
          href="https://eloquent-benz-e67138.netlify.app/"
          className="btn-red"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>

        <a
          href="https://github.com/drewclem/layerframe-animation"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="github" icon={faCodepen} />
        </a>
      </div>
    </div>
  </Layout>
)

export default Projects
