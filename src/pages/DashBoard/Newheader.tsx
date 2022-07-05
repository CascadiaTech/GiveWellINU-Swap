import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
import styled from 'styled-components/macro'

import CascadiaTechFrontPic from '../../assets/images/CascadiaTechFrontPic.png'

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

const Headernew = () => {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [userinfo, setuserinfo] = useState([])
  const [hidden, sethidden] = useState(false)
  const [externalaccount, setexternalaccount] = useState(Boolean)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  async function PostBalance() {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const update = {
        name: 'johhnnyyy',
        address: '0x000000000000000000000000111',
      }
      const response = fetch('https://goc0xambi2.execute-api.us-east-2.amazonaws.com/postuserinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'johhnnyyyboiiii',
          address: '0x000000000000000000000000111',
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

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 10) {
        return sethidden(false)
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
    </>
  )
}
export default Headernew
