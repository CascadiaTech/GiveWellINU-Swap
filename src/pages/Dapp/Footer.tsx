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
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import tglink from '../../assets/images/tglink.png'
import twitter from '../../assets/images/twitter.png'

const FooterBackground = styled(Row)`
  justify-self: center;
  background-color: transparent;
  width: 100vw;
  max-width: 100vw;
  height: 58vh;
  max-height: 58vh;
  min-height: 35vh;
  padding: 1px;
  transform: translate(0%, 30%);
  z-index: -11;
  overflow: visible;
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
    width: 100vw;
    max-width: 100vw;
    background-color: transparent;
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
                          <div className={'flexbox-vertical-container'}>
                            <div className={'flexbox-container'}>
                              <a
                                style={{ marginLeft: '20vw' }}
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/ApeMotorcycle"
                              >
                                <img className={'footersocialimage'} src={twitter} alt="tglink"></img>
                              </a>
                              <a target="_blank" rel="noreferrer" href="https://">
                                <img className={'footersocialimage'} src={tglink} alt="tglink"></img>
                              </a>
                              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/apemotorcycleclub/">
                                <img className={'footersocialimage'} src={instagram} alt="tglink"></img>
                              </a>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/Ape-Motorcycle-Club-104428762148239"
                              >
                                <img className={'footersocialimage'} src={facebook} alt="tglink"></img>
                              </a>
                              <a target="_blank" rel="noreferrer" href="https://discord.com/invite/QQvgp9cgeb">
                                <img
                                  className={'footersocialimage'}
                                  style={{ marginRight: '15vw' }}
                                  src={discord}
                                  alt="tglink"
                                ></img>
                              </a>
                            </div>
                          </div>
                          <div>
                            <form ref={form} onSubmit={sendEmail}>
                              <FormCard>
                                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                                  <div className={'flexbox-vertical-container'}>
                                    <p
                                      style={{
                                        fontFamily: 'Rye, cursive',
                                        fontSize: 'calc(3.5 * (0.4vw + 0.4vh))',
                                        color: '#ffffff',
                                      }}
                                    >
                                      Contact Us
                                    </p>
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
                                    <img className={'footer-logo'} src={ApeMotorcycleLogo} alt="logo"></img>
                                    <div
                                      style={{
                                        textAlign: 'center',
                                        lineHeight: 1.0,
                                      }}
                                    >
                                      <p
                                        style={{
                                          color: '#ffffff',
                                          fontFamily: 'Rye, cursive',
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
                                          fontFamily: 'Rye, cursive',
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
