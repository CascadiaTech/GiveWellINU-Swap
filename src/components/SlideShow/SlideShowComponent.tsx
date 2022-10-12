import './index.css'
import 'tw-elements'
import 'tailwindcss-elevation'

import blue from 'assets/images/blue.png'
import green from 'assets/images/green.png'
import oranje from 'assets/images/oranje.png'
import red from 'assets/images/red.png'

export default function SlideShowComponent() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-inner relative w-full overflow-hidden justify-center">
        <div className="carousel-item active relative float-left w-full duration-300 ease-in-out delay-200">
          <div
            style={{
              backgroundPosition: '20%',
              backgroundImage: `url(${blue})`,
              height: 'fit-content',
              minHeight: '250px',
              width: 'fit-content',
              minWidth: '250px',
            }}
          ></div>
        </div>
        <div className="carousel-item relative float-left w-full duration-300 ease-in-out delay-200">
          <div
            style={{
              backgroundPosition: '10%',
              backgroundImage: `url(${red})`,
              height: 'fit-content',
              minHeight: '250px',
              width: 'fit-content',
              minWidth: '250px',
            }}
          ></div>
        </div>
        <div className="carousel-item relative float-left w-full duration-300 ease-in-out delay-200">
          <div
            style={{
              backgroundPosition: '10%',
              backgroundImage: `url(${oranje})`,
              height: 'fit-content',
              minHeight: '250px',
              width: 'fit-content',
              minWidth: '250px',
            }}
          ></div>
        </div>
        <div className="carousel-item relative float-left w-full duration-300 ease-in-out delay-200">
          <div
            style={{
              backgroundPosition: '10%',
              backgroundImage: `url(${green})`,
              height: 'fit-content',
              minHeight: '250px',
              width: 'fit-content',
              minWidth: '250px',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
