import React from "react"
import makeCarousel from 'react-reveal/makeCarousel'
import Animation from 'react-reveal/Bounce'
import Home1 from '../images/home1.jpg'
import Home2 from '../images/home2.jpg'
import Home3 from '../images/home3.jpg'
import Home4 from '../images/home4.jpg'


import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const CarouselUI = ({ position, handleClick, children, total }) => 
  <div className='carouselUi'>
    <div className='carouselControls'>
      <FontAwesomeIcon
        className='arrows'
        icon={faCaretLeft}
        onClick={handleClick}
        data-position={position - 1}
      />

      <span className='dots'>
        {Array(...Array(total)).map( (val, index) =>
          <span className='dot' key={index} onClick={handleClick} data-position={index}>
            {index === position ? '● ' : '○ ' }
          </span>
        )}
      </span>
      
      <FontAwesomeIcon
        className='arrows'
        icon={faCaretRight}
        onClick={handleClick}
        data-position={position + 1}
      />
    </div>
    {children}
  </div>;
const Carousel = makeCarousel(CarouselUI);

const HomeSlider = () => (
        <Carousel
          defaultWait={10000}>
          <Animation>
            <img style={{
              width: 250,
              height: 250,
              borderRadius: 250,
              zIndex: -1
            }} src={Home1} alt='home1'/>
          </Animation>
          <Animation>
            <img style={{
              width: 250,
              borderRadius: 250,
              zIndex: -1
            }} src={Home2} alt='home2'/>
          </Animation>
          <Animation>
            <img style={{
              width: 250,
              borderRadius: 250,
              zIndex: -1
            }} src={Home3} alt='home3'/>
          </Animation>
          <Animation>
            <img style={{
              width: 250,
              borderRadius: 250,
              zIndex: -1
            }} src={Home4} alt='home4'/>
          </Animation>
        </Carousel>
)

export default HomeSlider