import './styles.css'

import Row from 'components/Row'
import styled from 'styled-components/macro'

import CascadiaTech from '../../assets/images/CascadiaTech.png'

const FooterBackground = styled(Row)`
  justify-self: center;
  background-color: rgba(0, 0, 145, 0.76);
  width: 100vw;
  max-width: 100vw;
  height: 38vh;
  max-height: 38vh;
  padding: 15px;
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
    right: 10%;
    transform: translate(10%, 10%);
    margin: 0 auto;
    width: 100vw;
    max-width: 100vw;
    background-color: rgba(0, 0, 145, 0.76);
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `};
`

export default function FooterMenu() {
  return (
    <FooterBackground>
      <div className={'flexbox-container'}>
        <img
          src={CascadiaTech}
          alt="logo"
          style={{ paddingLeft: '7vw', marginLeft: '3vw', marginRight: '8vw', maxHeight: '18vw', height: '18vw' }}
        ></img>
        <div style={{ textAlign: 'center', maxWidth: '13vw', width: '13vw', marginRight: '18vw' }}>
          <p
            style={{
              color: '#ffffff',
              fontFamily: 'montserrat, sans-serif',
              fontSize: 'calc(2 * (0.7vw + 0.7vh))',
              fontWeight: 'bold',
            }}
          >
            Cascadia Finance
          </p>
          <p
            style={{
              color: '#ffffff',
              fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
              lineHeight: 1.3,
              fontFamily: 'montserrat, sans-serif',
            }}
          >
            CascadiaTech is here for all of your developing needs
          </p>
        </div>
        <div>
          <p
            style={{
              color: '#ffffff',
              fontFamily: 'montserrat, sans-serif',
              fontSize: 'calc(2 * (0.7vw + 0.7vh))',
              fontWeight: 'bold',
            }}
          >
            Company Links
          </p>
          <div
            className={'flexbox-vertical-container'}
            style={{
              textAlign: 'left',
              maxWidth: '5vw',
              width: '5vw',
              marginRight: '18vw',
              lineHeight: 2,
            }}
          >
            <a
              className={'four'}
              href="https://twitter.com/CascadiaFinance"
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: 'montserrat, sans-serif', fontSize: 'calc(3.5 * (0.25vw + 0.25vh))' }}
            >
              Twitter
            </a>
            <a
              className={'four'}
              href="https://t.me/+8ZaQrFjaWWgzMTMx"
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: 'montserrat, sans-serif', fontSize: 'calc(3.5 * (0.25vw + 0.25vh))' }}
            >
              Telegram
            </a>
            <a
              className={'four'}
              href="https://github.com/CascadiaTech"
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: 'montserrat, sans-serif', fontSize: 'calc(3.5 * (0.25vw + 0.25vh))' }}
            >
              Github
            </a>
          </div>
          <p style={{ color: '#ffffff', fontSize: 'calc(3.5 * (0.15vw + 0.15vh))' }}>
            hollowaycryptoconsulting@gmail.com
          </p>
        </div>
      </div>
    </FooterBackground>
  )
}
