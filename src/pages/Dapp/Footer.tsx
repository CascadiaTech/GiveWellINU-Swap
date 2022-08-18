import '../DashBoard/styles.css'
import 'animate.css'

//import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import useScrollPosition from '@react-hook/window-scroll'
import ApeMotorcycleLogo from 'assets/images/ApeMotorcycleLogo.png'
import { FormCard } from 'components/Card'
import Row from 'components/Row'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components/macro'
import Swal from 'sweetalert2'

import discord from '../../assets/images/discord.png'
import instagram from '../../assets/images/instagram.png'
import tglink from '../../assets/images/tglink.png'
import tiktok from '../../assets/images/tiktok.png'
import twitter from '../../assets/images/twitter.png'
import uniswap from '../../assets/images/uniswap.png'
const FooterBackground = styled(Row)`
  justify-self: center;
  background-color: rgba(194, 194, 194, 0.912);
  height: 60vh;
  max-height: 60vh;
  min-height: 35vh;
  padding: 1px;
  transform: translate(0%, 30%);
  z-index: -11;
  overflow: hidden;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    justify-self: start;  
    `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-self: center;
  `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-self: center;
    z-index: 99;
    position: relative;
    transform: translate(0%, 2%);
    width: 99vw;
    max-width: 99vw;
    background-color: rgba(194, 194, 194, 0.912);
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `};
`

export default function FooterMenu() {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()
  const [message, setmessage] = useState(String)
  const [emails, setemail] = useState(String)

  const SERVICE_ID = 'service_pbjqier'
  const TEMPLATE_ID = 'contact_form'
  const USER_ID = 'iBjsKXibozEgEn3zJ'

  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current as unknown as string, USER_ID).then(
      (result: any) => {
        console.log(result.text)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        })
      },
      (error: any) => {
        console.log(error.text)
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
        })
      }
    )
  }

  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 2000) {
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
    <div>
      {!hidden ? (
        <div>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div style={props} key={key}>
                  <div className={'animate__animated animate__animate__fadeInDown'}>
                    <FooterBackground>
                      <div className={'flexbox-vertical-container'}>
                        <div
                          style={{
                            textAlign: 'center',
                            maxWidth: 'fit-content',
                            width: 'fit-content',
                          }}
                        >
                          <div>
                            <form ref={form} onSubmit={sendEmail}>
                              <FormCard>
                                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                                  <div className={'flexbox-vertical-container'}>
                                    <h1
                                      style={{
                                        fontFamily: 'montserrat, sans-serif',
                                        fontSize: 'calc(3.5 * (0.35vw + 0.35vh))',
                                        color: '#ffffff',
                                      }}
                                    >
                                      Contact Us
                                    </h1>
                                    <label
                                      style={{
                                        fontFamily: 'montserrat, sans-serif',
                                        fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                                        textAlign: 'left',
                                        width: '45vw',
                                        color: '#ffffff',
                                      }}
                                      htmlFor="fname"
                                    >
                                      Email
                                    </label>
                                    <input
                                      style={{
                                        fontFamily: 'montserrat, sans-serif',
                                        fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                                      }}
                                      onChange={(e) => setemail(e.target.value)}
                                      type="text"
                                      id="from_email"
                                      name="from_email"
                                      placeholder="anyone@anywhere.com"
                                    ></input>

                                    <label
                                      style={{
                                        fontFamily: 'montserrat, sans-serif',
                                        fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                                        textAlign: 'left',
                                        color: '#ffffff',
                                      }}
                                      htmlFor="fname"
                                    >
                                      Message
                                    </label>
                                    <input
                                      style={{
                                        fontFamily: 'montserrat, sans-serif',
                                        fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                                        marginBottom: '8px',
                                      }}
                                      onChange={(e) => setmessage(e.target.value)}
                                      type="text"
                                      id="message"
                                      name="message"
                                      placeholder="Message"
                                    ></input>
                                    {!message && !emails && (
                                      <p
                                        className={'Form-button'}
                                        style={{
                                          fontFamily: 'montserrat, sans-serif',
                                          fontSize: 'calc(3 * (0.25vw + 0.25vh))',
                                        }}
                                      >
                                        {' '}
                                        Please enter message
                                      </p>
                                    )}
                                    {message && emails && (
                                      <input
                                        style={{
                                          fontSize: 'calc(3 * (0.25vw + 0.25vh))',
                                          fontFamily: 'montserrat, sans-serif',
                                        }}
                                        className={'Form-button-input'}
                                        type="submit"
                                        value="Submit"
                                      />
                                    )}
                                  </div>
                                  <div className={'flexbox-vertical-container'} style={{ marginRight: '2vw' }}>
                                    <img
                                      className={'footer-logo'}
                                      src={ApeMotorcycleLogo}
                                      alt="logo"
                                      style={{
                                        paddingLeft: '6vw',
                                        marginLeft: '3vw',
                                        marginRight: '8vw',
                                        maxHeight: 'auto',
                                        width: '15vw',
                                        height: 'auto',
                                      }}
                                    ></img>
                                    <div
                                      style={{
                                        textAlign: 'center',
                                        lineHeight: 1.0,
                                      }}
                                    >
                                      <p
                                        style={{
                                          color: '#ffffff',
                                          fontFamily: 'montserrat, sans-serif',
                                          fontSize: 'calc(3 * (0.4vw + 0.4vh))',
                                          fontWeight: 'bold',
                                        }}
                                      >
                                        Ape Motorcycle Club
                                      </p>
                                      <p
                                        style={{
                                          color: '#ffffff',
                                          fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                                          fontFamily: 'montserrat, sans-serif',
                                        }}
                                      >
                                        Bringing Ape and Motorcycle Together
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </FormCard>
                            </form>
                          </div>
                        </div>
                        <div
                          className={'flexbox-container'}
                          style={{
                            paddingLeft: '1vw',
                            paddingTop: '2vh',
                            width: '100vw',
                            textAlign: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <h1
                            style={{
                              marginLeft: '2vw',
                              marginRight: '2vw',
                              fontSize: 'calc(3 * (0.7vw + 0.7vh))',
                              fontWeight: 600,
                              color: 'rgba(255, 153, 0, 0.979)',
                            }}
                          >
                            {' '}
                            Company Links{' '}
                          </h1>
                          <div style={{ marginTop: '6vh', marginLeft: '2vw' }}>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://twitter.com/AnimeVerseToken?t=kruSfQkxcFg6fBXgmFGx6A&s=09"
                            >
                              <img className={'footersocialimage'} src={twitter} alt="tglink"></img>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://t.me/AnimeVerse_PORTAL">
                              <img className={'footersocialimage'} src={tglink} alt="tglink"></img>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/animeversetoken/">
                              <img className={'footersocialimage'} src={instagram} alt="tglink"></img>
                            </a>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.tiktok.com/@animeversetoken?_d=secCgYIASAHKAESPgo8Dj7NAfouh8vNaqtivykJ5eox3dhn6lJ1dSrmOTdDFOMbNCm6mOyHvXHakifdPmZq6ItOAhmDChZx7%2BHYGgA%3D&_r=1&checksum=81b799b87afa6df5358b86998291cc58a71bbd902e7f6e1a9300be85c5afedee&language=en&sec_uid=MS4wLjABAAAAGGb5DhcC79rrhnKqMJB8u2QWTvYxxSh3h2XDbPalDzDxcvRrCdZU-5XEQUj-3HwD&sec_user_id=MS4wLjABAAAAvCb-T2_807apvbgqN2kQb-kjDzoVX0p_awn7Oe2MSiOcSEuxtngf1HsObCUcEZ1A&share_app_id=1233&share_author_id=7083639654771868678&share_link_id=B5367C99-9788-4280-A16C-E9C37BA54451&source=h5_m&timestamp=1655328035&tt_from=copy&u_code=dbd2e51fi4448b&ug_btm=b6880%2Cb5836&user_id=6806028567236183045&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
                            >
                              <img className={'footersocialimage'} src={tiktok} alt="tglink"></img>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://discord.com/invite/scUQpfHbUj">
                              <img className={'footersocialimage'} src={discord} alt="tglink"></img>
                            </a>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://app.uniswap.org/#/swap?inputCurrency=0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67&chain=mainnet"
                            >
                              <img className={'footersocialimage'} src={uniswap} alt="tglink"></img>
                            </a>
                          </div>
                        </div>
                      </div>
                    </FooterBackground>
                  </div>
                </animated.div>
              )
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
