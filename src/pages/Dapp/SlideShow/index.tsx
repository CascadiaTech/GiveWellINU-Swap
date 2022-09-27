import '../../DashBoard/styles.css'

import blue from 'assets/images/blue.png'
import green from 'assets/images/green.png'
import oranje from 'assets/images/oranje.png'
import red from 'assets/images/red.png'
import { useEffect, useState } from 'react'

const images = [`url(${blue})`, `url(${green})`, `url(${oranje}})`, `url(${red})`]

export default function SlideShow() {
  const [index, setIndex] = useState(0)
  const delay = 2500

  useEffect(() => {
    setTimeout(() => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)), delay)
  }, [index])
  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((index) => (
          <div className="slide" key={index}></div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div key={idx} className="slideshowDot"></div>
        ))}
      </div>
    </div>
  )
}
