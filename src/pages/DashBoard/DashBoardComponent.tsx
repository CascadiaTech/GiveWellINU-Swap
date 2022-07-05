import './styles.css'
import 'animate.css'

import { PurpleCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components/macro'

import CascadiaTechFrontPic from '../../assets/images/CascadiaTechFrontPic.png'
import JpegBackground2 from '../../assets/videos/JpegBackground2.mp4'

//padding: 8px 35px;

const StyledHeaderText1 = styled.text`
  font-size: calc(3 * (0.85vw + 0.85vh));
  color: #ffffff;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
`
const StyledHeaderText2 = styled.text`
  font-size: calc(3 * (0.85vw + 0.85vh));
  color: #09008a;
  font-weight: bold;
  text-shadow: 0px 0px 4px #ccceff;
  position: relative;
  left: 15px;
  font-family: Montserrat, sans-serif;
`

export default function DashBoardComponent() {
  const props = useSpring({
    config: { delay: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  const [hidden] = useState(false)
  const [Externalacc, setExternalacc] = useState(Boolean)
  const [isHidden, setishidden] = useState(true)
  const [names, setname] = useState(String)
  const [emails, setemail] = useState(String)

  function toggleHidden() {
    setishidden(!isHidden)
  }

  async function Postacc() {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      //const update = {
      //address: account,
      //name: names,
      //email: emails,
      //}
      const response = fetch('https://goc0xambi2.execute-api.us-east-2.amazonaws.com/postuserinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: account,
          name: names,
          email: emails,
        }),
      })
      const data = (await response).json()
      //const data = rawdata
      return data
    } catch (error) {
      console.log(error)
    } finally {
      console.log('success')
    }
  }

  async function FetchBalance() {
    try {
      //setLoading(true)
      const response = fetch('https://rwuejgug9a.execute-api.us-east-2.amazonaws.com/fetchuserinfohello', {
        method: 'GET',
      })
      const data = (await response).json().then((data) => {
        return data
      })
      return data
    } catch (error) {
      console.log(error)
    } finally {
      console.log('success')
    }
  }

  async function FetchExternalacc() {
    try {
      //setLoading(true)
      const response = fetch('https://rwuejgug9a.execute-api.us-east-2.amazonaws.com/fetchuserinfohello', {
        method: 'GET',
      })
      const data = (await response).json()
      return data
    } catch (error) {
      console.log(error)
    } finally {
      console.log('success')
    }
  }

  FetchExternalacc()
    .then((result) => result.some((result: { [x: string]: string }) => result['address'] === account))
    .then((result) => setExternalacc(result))

  if (!Externalacc) {
    return (
      <>
        <div className={'mobileheader'}>
          <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
            <div className={'flexbox-container'}>
              <div style={{ justifyContent: 'right' }}>
                <img
                  className={'header-image'}
                  src={CascadiaTechFrontPic}
                  alt="header"
                  style={{ maxWidth: '40vw' }}
                ></img>
              </div>
              <div style={{ marginTop: '80px' }} className="flexbox-vertical-container-left">
                <div className={'header-text'}>
                  <div>
                    <StyledHeaderText1> We are here to</StyledHeaderText1> <StyledHeaderText2>Build</StyledHeaderText2>
                  </div>
                  <div>
                    <StyledHeaderText1> We are here to</StyledHeaderText1> <StyledHeaderText2>Grow</StyledHeaderText2>
                  </div>
                  <p
                    style={{
                      color: '#ffffff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                      textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {' '}
                    We build Blockchain projects. Big or small we have you covered. Our team has expertise in NFT
                    Collections, ERC20 tokens, custom contracts and the beautiful web applications that accompany them.
                    Contact us for a quote we would love to help.
                  </p>
                  <div className="flexbox-container" style={{ justifyContent: 'center' }}>
                    <div>
                      <button onClick={toggleHidden} className={'GitButton-inactive'}>
                        Create an account
                      </button>
                      {!isHidden && (
                        <PurpleCard>
                          <label htmlFor="fname">First Name</label>
                          <input
                            onChange={(e) => setname(e.target.value)}
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Your name.."
                          ></input>

                          <label htmlFor="fname">Email Address</label>
                          <input
                            onChange={(e) => setemail(e.target.value)}
                            type="text"
                            id="fname"
                            name="Email"
                            placeholder="someone@somewhere.com"
                          ></input>
                          {!names && !emails && <button> no submit</button>}
                          {names && emails && account && (
                            <input onClick={() => Postacc()} type="submit" value="Submit" />
                          )}
                        </PurpleCard>
                      )}
                    </div>
                    <button onClick={toggleHidden} className={'QuoteButton'}>
                      Contact us for a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
        <p className={'header-space'} style={{ paddingTop: '1px', marginTop: '1px', marginBottom: '1px' }}></p>
        <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
        <video autoPlay loop muted playsInline className="video">
          <source src={JpegBackground2} type="video/mp4" />
        </video>{' '}
      </>
    )
  } else {
    if (Externalacc) {
    }
    return (
      <>
        <div className={'mobileheader'}>
          <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
            <div className={'flexbox-container'}>
              <div style={{ justifyContent: 'right' }}>
                <img
                  className={'header-image'}
                  src={CascadiaTechFrontPic}
                  alt="header"
                  style={{ maxWidth: '40vw' }}
                ></img>
              </div>
              <div style={{ marginTop: '80px' }} className="flexbox-vertical-container-left">
                <div className={'header-text'}>
                  <div>
                    <StyledHeaderText1> We are here to</StyledHeaderText1> <StyledHeaderText2>Build</StyledHeaderText2>
                  </div>
                  <div>
                    <StyledHeaderText1> We are here to</StyledHeaderText1> <StyledHeaderText2>Grow</StyledHeaderText2>
                  </div>
                  <p
                    style={{
                      color: '#ffffff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                      textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {' '}
                    We build Blockchain projects. Big or small we have you covered. Our team has expertise in NFT
                    Collections, ERC20 tokens, custom contracts and the beautiful web applications that accompany them.
                    Contact us for a quote we would love to help.
                  </p>
                  <div className="flexbox-container" style={{ justifyContent: 'center' }}>
                    <button
                      className={'GitButton'}
                      onClick={() => {
                        Test()
                        async function Test() {
                          const printinfo = await FetchBalance()
                          console.log(printinfo)
                          console.log(
                            printinfo.some((printinfo: { [x: string]: string }) => printinfo['address'] === account)
                          )
                        }
                      }}
                    >
                      {' '}
                      Mint
                    </button>
                    <button onClick={() => window.open('https://t.me/+8ZaQrFjaWWgzMTMx')} className={'QuoteButton'}>
                      Contact us for a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
        <p className={'header-space'} style={{ paddingTop: '1px', marginTop: '1px', marginBottom: '1px' }}></p>
        <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
        <video autoPlay loop muted playsInline className="video">
          <source src={JpegBackground2} type="video/mp4" />
        </video>{' '}
      </>
    )
  }
}

//<div style={{ justifyContent: 'center' }}>
//<StratSection></StratSection>
//</div>
//<p style={{ paddingTop: '30px', marginTop: '30px', marginBottom: '30px' }}></p>
//<TransparentCard></TransparentCard>
//<div>
//<PortfolioSection></PortfolioSection>
//<Footer></Footer>
//</div>
