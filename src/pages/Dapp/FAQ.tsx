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
  const [isHidden6, setishidden6] = useState(true)
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
  function toggleHidden6() {
    setishidden6(!isHidden6)
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
            {' '}
            <div>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                What is Anime?
              </p>
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
                A style of animation originating in Japan that is characterized by stark colorful graphics depicting
                vibrant characters in action-filled plots often with fantastic or futuristic themes.
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden2}>
            {' '}
            <div>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                Why Trust AnimeVerse?
              </p>
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
                We are a transparent team with a KYC in process. Additionally, we have a Multi-Sig marketing wallet that
                requires multiple approvals for any transaction to take place. This means no team member can run a
                transaction solely, ensuring community and project funds are %100 safe.
              </p>
            )}
          </FAQCard>
          <FAQCard style={{ transition: '1s' }} onClick={toggleHidden3}>
            {' '}
            <div>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                Is Liquidity Locked?
              </p>
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
                Liquidity is locked for 6 months and will be re-locked on expiration.
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden4}>
            {' '}
            <div>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                Was there a private sale or pre-sale?
              </p>
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
                No Private-sale or Pre-sale
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden5}>
            {' '}
            <div>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                Team Token Allocation or Dev Tax?
              </p>
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
                There was NO team token allocation, and we have NO dev tax in our tokenomics.
              </p>
            )}
          </FAQCard>
          <FAQCard onClick={toggleHidden6}>
            {' '}
            <div>
              <p
                className={'FAQheadertext'}
                style={{
                  fontSize: 'calc(3 * (0.5vw + 0.5vh))',
                  textAlign: 'left',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                Smart Contract Audit?
              </p>
            </div>
            {!isHidden6 && (
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
                All of our Smart Contracts are be audited. Click the Audits tab on the header
              </p>
            )}
          </FAQCard>
        </div>
      </div>
    </>
  )
}
