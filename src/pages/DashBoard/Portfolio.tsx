import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import DesignDevPic from 'assets/images/DesignDevPic.jpg'
import ReactDevPic from 'assets/images/ReactDevPic.jpg'
import SolidityDevPic from 'assets/images/SolidityDevPic.jpg'
import { TransparentCard } from 'components/Card'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'

export default function PortfolioSection() {
  const [hidden, sethidden] = useState(false)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000, duration: -2000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 450) {
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
    <>
      <animated.div hidden={hidden} style={props} className={'animate__animated animate__fadeInUp'}>
        <div style={{ justifyContent: 'center' }}>
          <h1
            className={'HoverText'}
            style={{
              fontSize: 'calc(3 * (0.75vw + 0.75vh))',
              textAlign: 'center',
              color: '#ffffff',
              paddingBottom: '5vh',
            }}
          >
            Portfolio
          </h1>
        </div>
        <div className="portfolio">
          <p
            style={{
              maxWidth: '1000px',
              textAlign: 'center',
              textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
              fontSize: '15px',
              lineHeight: '1.4',
              justifySelf: 'end',
              paddingBottom: '2vh',
            }}
          >
            <img
              style={{ marginRight: '10px', paddingLeft: '20px' }}
              className={'imgport1'}
              src={ReactDevPic}
              alt="remix"
            />
            <h1
              className={'imgButton'}
              onClick={() => window.open('https://kr.ncsoft.com/en/whoWeAre/about.do')}
              style={{
                textDecoration: 'underline solid 2px',
                fontFamily: 'montserrat, sans-serif',
                fontSize: 'calc(3 * (0.5vw + 0.5vh))',
              }}
            >
              Scalable front-end Applcations
            </h1>
            We specialize in developing clean and professional Web3 applications. Our preferred development language is
            React, a commonly used framework that will allow your application to scale with ease. Our team has years of
            combined experience in developing Web3 React applications. Click the header above to view some examples of
            our past work.{' '}
          </p>{' '}
        </div>
        <TransparentCard></TransparentCard>
        <div className="portfolio2">
          <p
            style={{
              maxWidth: '1000px',
              textAlign: 'center',
              textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
              fontSize: '15px',
              lineHeight: '1.4',
              paddingBottom: '2vh',
            }}
          >
            <img className={'imgport2'} src={SolidityDevPic} alt="remix" />
            <h1
              className={'imgButton'}
              onClick={() => window.open('https://github.com/connerstakein/staking-contract')}
              style={{
                textDecoration: 'underline solid 2px',
                fontFamily: 'montserrat, sans-serif',
                fontSize: 'calc(3 * (0.5vw + 0.5vh))',
              }}
            >
              Smart Contracts
            </h1>
            We enjoy the challenge of designing novel applications, and smart contracts are our playground. If you click
            the header above you can see our custom ERC20 staking contract which has been open sourced for founders and
            developers to use and learn. We use this contract to teach others how to make custom smart contracts. Think
            you have a unique idea? reach out to us and contact us!{' '}
          </p>{' '}
        </div>
        <TransparentCard></TransparentCard>
        <div className="portfolio3">
          <p
            style={{
              maxWidth: '1000px',
              textAlign: 'center',
              textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
              fontSize: '15px',
              lineHeight: '1.4',
              paddingBottom: '2vh',
            }}
          >
            <img className={'imgport3'} src={DesignDevPic} alt="remix" />
            <div style={{ paddingRight: '50px' }}>
              <h1
                className={'imgButton'}
                onClick={() => window.open('https://xd.adobe.com/view/a2a713e4-c50b-4ab4-92a0-08ad918255c7-f7f4/')}
                style={{
                  textDecoration: 'underline solid 2px',
                  fontFamily: 'montserrat, sans-serif',
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                }}
              >
                Design
              </h1>
              We have designers in house with experise in custom branding, and illustations to meet your projects needs!
              Before we start to code we always get expert designs drafted so we will know exactly what you want to see
              from your application. Even if you are not sure if you want the app developed but want to see some
              preliminary mockups reach out to us! Click The header above to see a PDF of one of our most recent
              designs.
            </div>
          </p>{' '}
        </div>
      </animated.div>
    </>
  )
}
