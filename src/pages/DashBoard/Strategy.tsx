import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import { PurpleCard } from 'components/Card'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
import styled from 'styled-components/macro'

import Card_BubbleIcon from '../../assets/images/Card_BubbleIcon.png'
import Card_ChartIcon from '../../assets/images/Card_ChartIcon.png'
import Card_GraphIcon from '../../assets/images/Card_GraphIcon.png'
import Line_pic from '../../assets/images/Line_pic.png'
const StyledHeader = styled.text`
  font-size: calc(3 * (0.75vw + 0.75vh));
  color: #ffffff;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  text-align: center;
  padding-top: 4vh;
`

const StratSection = () => {
  const [hidden, sethidden] = useState(false)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 50) {
        return sethidden(true)
      } else {
        try {
          return sethidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishidden()
  }, [ScrollY])
  return (
    <animated.div hidden={hidden} style={props} className={'animate__animated animate__fadeInUp'}>
      <div className={'flexbox-vertical-container-max-width'}>
        <div className={'contentcenter'}>
          {' '}
          <StyledHeader>Our Services</StyledHeader>
          <p></p>
          <p></p>
          <p
            style={{
              maxWidth: '70vw',
              textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
              fontSize: '15px',
              textAlign: 'center',
              justifyContent: 'center',
              fontFamily: 'Lato, Sans-serif',
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            Our team has experience in taking applications from idea to a finished masterpiece. From designing the
            intial concept, to deploying to your production environment we have done it. Our specialization is in Web3
            projects, our preferred frontend language ReactJS is used throughout the industry so your app can scale. We
            also pride ourselves on wirting innovative smart contracts to suit your unique business idea. Check out
            examples of our past work!
          </p>
          <p></p>
          <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard
                className={'HoverCard'}
                style={{
                  maxWidth: '20vw',
                  minWidth: '5vw',
                  maxHeight: '30vh',
                  width: '20vw',
                  marginRight: '2vw',
                  height: '30vh',
                  marginTop: 20,
                }}
              >
                <img className={'card-icon'} alt="icon" src={Card_ChartIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>React</h1>
                <p style={{ color: '#ffffff', fontSize: 'calc(3 * (0.25vw + 0.25vh))' }}>
                  We specialize in making responsive web applications{' '}
                </p>
                <img style={{ paddingBottom: '7vh' }} className={'img-size'} src={Line_pic} alt="line"></img>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard
                className={'HoverCard'}
                style={{
                  maxWidth: '20vw',
                  minWidth: '5vw',
                  maxHeight: '30vh',
                  width: '20vw',
                  height: '30vh',
                  marginTop: 20,
                  marginRight: '2vw',
                }}
              >
                <img className={'card-icon'} alt="icon" src={Card_BubbleIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Solidity</h1>
                <p style={{ color: '#ffffff', fontSize: 'calc(3 * (0.25vw + 0.25vh))' }}>
                  {' '}
                  We offer services in Solidy Smart-Contract development
                </p>
                <img style={{ paddingBottom: '7vh' }} className={'img-size'} src={Line_pic} alt="line"></img>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard
                className={'HoverCard'}
                style={{
                  maxWidth: '20vw',
                  minWidth: '5vw',
                  maxHeight: '30vh',
                  width: '20vw',
                  marginRight: '2vw',
                  height: '30vh',
                  marginTop: 20,
                }}
              >
                <img className={'card-icon'} alt="icon" src={Card_GraphIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>Design</h1>
                <p style={{ color: '#ffffff', fontSize: 'calc(3 * (0.25vw + 0.25vh))' }}>
                  We have all of your project design needs covered!
                </p>
                <img style={{ paddingBottom: '7vh' }} className={'img-size'} src={Line_pic} alt="line"></img>
              </PurpleCard>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}
export default StratSection
