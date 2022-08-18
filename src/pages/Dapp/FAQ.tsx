import '../DashBoard/styles.css'
import 'animate.css'

import useScrollPosition from '@react-hook/window-scroll'
//import ArrowIcon from 'assets/ArrowIcon.png'
import { FAQCard } from 'components/Card'
import React, { useEffect, useState } from 'react'
//import { useSpring } from 'react-spring/web'
export default function FAQPage() {
  const [isHidden, setishidden] = useState(true)
  const [isHidden2, setishidden2] = useState(true)
  const [isHidden3, setishidden3] = useState(true)
  const [isHidden4, setishidden4] = useState(true)
  const [isHidden5, setishidden5] = useState(true)
  //const [isHidden6, setishidden6] = useState(true)
  function toggleHidden() {
    setishidden(!isHidden)
  }
  function toggleHidden2() {
    setishidden2(!isHidden2)
  }
  function toggleHidden3() {
    setishidden3(!isHidden3)
  }
  function toggleHidden4() {
    setishidden4(!isHidden4)
  }
  function toggleHidden5() {
    setishidden5(!isHidden5)
  }

  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 60) {
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
      <div className={'flexbox-container'} style={{ transition: '1s' }}>
        <div className={'flexbox-vertical-container'} style={{ width: '100vw' }}>
          <p className={'Pointedly-Mad'} style={{ fontSize: 'calc(3 * (0.8vw + 0.8vh))', color: '#ffffff' }}>
            FAQ
          </p>
          <FAQCard onClick={toggleHidden}>
            <div className={'flexbox-container'} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                What is the total NFT supply ?
              </p>
              <div tabIndex={1} id="faqdropdown0" className={'faqdropdown'}></div>{' '}
            </div>
            {!isHidden && (
              <p
                style={{
                  textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                  fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  fontWeight: 550,
                  fontFamily: 'montserrat, sans-serif',
                  color: '#ffffff',
                }}
              >
                {' '}
                10,000 unique NFTS with custom rarities will be available for minting!
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden2}>
            {' '}
            <div className={'flexbox-container'} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                What is the price per NFT?
              </p>
              <div tabIndex={1} id="faqdropdown0" className={'faqdropdown'}></div>{' '}
            </div>
            {!isHidden2 && (
              <p
                style={{
                  textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                  fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  fontWeight: 550,
                  fontFamily: 'montserrat, sans-serif',
                  color: '#ffffff',
                }}
              >
                {' '}
                Our Starting Mint price will be 0.075 ETH per unique ApeMotorcycleClub NFT
              </p>
            )}
          </FAQCard>
          <FAQCard style={{ transition: '1s' }} onClick={toggleHidden3}>
            {' '}
            <div className={'flexbox-container'} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                Where Can I see information about my NFT?
              </p>
              <div tabIndex={1} id="faqdropdown0" className={'faqdropdown'}></div>{' '}
            </div>
            {!isHidden3 && (
              <p
                style={{
                  textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                  fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  fontWeight: 550,
                  fontFamily: 'montserrat, sans-serif',
                  color: '#ffffff',
                }}
              >
                {' '}
                We have a subgraph deployed for our collection so users may easily see information regarding their NFTS
                Click the link below to see what NFTs you hold.
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden4}>
            {' '}
            <div className={'flexbox-container'} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                Is their a Whitelist for the sale?
              </p>
              <div tabIndex={1} id="faqdropdown0" className={'faqdropdown'}></div>{' '}
            </div>
            {!isHidden4 && (
              <p
                style={{
                  textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                  fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  fontWeight: 550,
                  fontFamily: 'montserrat, sans-serif',
                  color: '#ffffff',
                }}
              >
                {' '}
                There is a Whitelist, and those whitelisted wallets can mint for less at launch. Come talk to the team
                to figure out how you can be whitelisted!
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden5}>
            {' '}
            <div className={'flexbox-container'} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                Wen metaverse?
              </p>
              <div tabIndex={1} id="faqdropdown0" className={'faqdropdown'}></div>{' '}
            </div>
            {!isHidden5 && (
              <p
                style={{
                  textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                  fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  fontWeight: 550,
                  fontFamily: 'montserrat, sans-serif',
                  color: '#ffffff',
                }}
              >
                {' '}
                Soon my fellow ape, soon.
              </p>
            )}
          </FAQCard>
        </div>
      </div>
    </>
  )
}
