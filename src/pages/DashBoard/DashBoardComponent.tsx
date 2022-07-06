import './styles.css'
import 'animate.css'

import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { abiObject } from 'abis/abi'
import { PurpleCard } from 'components/Card'
import CountdownTimer from 'components/TimerCountdown'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useCallback, useEffect, useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const [hidden] = useState(false)
  const [Externalacc, setExternalacc] = useState(Boolean)
  const [isWhitelisted, setisWhitelisted] = useState(Boolean)
  const [isHidden, setishidden] = useState(true)
  const [names, setname] = useState(String)
  const [emails, setemail] = useState(String)
  const context = useWeb3React()
  const { library } = context
  const provider = new Web3Provider(library.provider)
  const signer = provider.getSigner()

  function CountdownTimers() {
    const calculateTimeLeft = () => {
      const year = new Date().getFullYear()
      const difference = +new Date(`10/01/${year}`) - +new Date()
      let timeLeft: any = {}

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 480 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [year] = useState(new Date().getFullYear())

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft())
      }, 1000)

      return () => clearTimeout(timer)
    })

    const timerComponents: any = []

    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return
      }

      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{' '}
        </span>
      )
    })
    return timerComponents.length
  }

  const handleMint = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = abiObject
      const abi = data
      console.log(data)
      const contractaddress = '0xa2607d28F7a899E38Abe99C67ccb37127875Be7E' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const options = { value: parseEther('0.0012') }
      const MintNFT = await contract.Mint(1, options) //.claim()
      const Claimtxid = await MintNFT

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, signer])

  const WhitelistMint = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = abiObject
      const abi = data
      console.log(data)
      const contractaddress = '0xa2607d28F7a899E38Abe99C67ccb37127875Be7E' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const options = { value: parseEther('0.0012') }
      const whitelistMint = await contract.whitelistMint(1, options) //.claim()
      const Claimtxid = await whitelistMint

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, signer])

  function toggleHidden() {
    setishidden(!isHidden)
  }

  async function Postacc() {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
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

  useEffect(() => {
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

    async function FetchisWhitelisted() {
      try {
        //setLoading(true)
        const data = abiObject
        const abi = data
        console.log(data)
        const contractaddress = '0xa2607d28F7a899E38Abe99C67ccb37127875Be7E' // "clienttokenaddress"
        const contract = new Contract(contractaddress, abi, provider)
        const whitelistMint = await contract.isWhitelisted(account) //.claim()
        const Claimtxid = await whitelistMint
        return Claimtxid
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success')
      }
    }

    FetchExternalacc()
      .then((result) => result.some((result: { [x: string]: string }) => result['address'] === account))
      .then((result) => setExternalacc(result))

    FetchisWhitelisted().then((result) => setisWhitelisted(result))
  })

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
                  <div style={{ color: 'white' }}>
                    (<span>Presale is Active! Only Whitelisted wallets can purchase an NFT</span>) Left till Presale
                    Left till Presale is Open
                  </div>
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
                    {isWhitelisted ? (
                      <button
                        className={'GitButton'}
                        onClick={() => {
                          handleMint()
                        }}
                      >
                        {' '}
                        Mint
                      </button>
                    ) : (
                      <button className="GitButton"> You are not Whitelisted </button>
                    )}
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
        <CountdownTimer></CountdownTimer>
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
