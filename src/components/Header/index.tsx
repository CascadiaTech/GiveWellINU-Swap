/* eslint-disable simple-import-sort/imports */
import '../../pages/DashBoard/styles.css'
import { Trans } from '@lingui/macro'
import { CHAIN_INFO } from 'constants/chainInfo'
import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useTheme from 'hooks/useTheme'
//import { darken } from 'polished'
import { NavLink } from 'react-router-dom'
//import { useDarkModeManager } from 'state/user/hooks'
import { useNativeCurrencyBalances } from 'state/wallet/hooks'
import styled from 'styled-components/macro'
import discord from '../../assets/images/discord.png'
import instagram from '../../assets/images/instagram.png'
import tglink from '../../assets/images/tglink.png'
import tiktok from '../../assets/images/tiktok.png'
import twitter from '../../assets/images/twitter.png'
import uniswap from '../../assets/images/uniswap.png'

import ApeMotorcycleLogo from 'assets/images/ApeMotorcycleLogo.png'
//import Menu from '../Menu' - this is the menu that includes uniswaps docs etc.
import Row from '../Row'
import Web3Status from '../Web3Status'
import NetworkSelector from './NetworkSelector'

const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: grid;
  grid-template-columns: 1px 1fr 1px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  bottom: 8px;
  position: relative;
  z-index: 21;
  position: relative;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : 'transparent;')};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: -5px 0.5fr 0.5fr;
  `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:  1rem;
    grid-template-columns: 30fr 30fr;
    max-height: 50px;
  `};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding:  1rem;
    grid-template-columns: 4px 1fr;
    max-height: 50px;
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-left: 0.5em;
  }
  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;

`

const HeaderLinks = styled(Row)`
  justify-self: center;
  background-color: rgba(34, 34, 34, 0.904);
  width: 100vw;
  max-width: 100vw;
  padding: 15px;
  padding-left: 85px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 100px;
  z-index: -11;
  overflow: auto;
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
    position: fixed;
    bottom: 0; right: 20%;
    transform: translate(20%,-30%);
    margin: 0 auto;
    border-radius: 10px;
    background-color: rgba(34, 34, 34, 0.904);
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid;
  border-radius: 16px;
  text-color: #ffffff;
  color: #000000;
  background-color: rgba(34, 34, 34, 0.904);
  overflow: visible:
  margin-right: 50px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  width: 80%;
  height: 40px;
  :focus {
    border: 10px solid blue;
  }
`

const BalanceText = styled.text`
  color: #ffffff;
  font-size: '16px';
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  margin-right: 50px;
  :hover {
    transform: rotate(-5deg);
  }
  position: relative;
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  font-size: calc(3.5 * (0.2vw + 0.2vh));
  font-weight: 500;
  padding: 8px 12px;
  word-break: break-word;
  overflow: hidden;
  white-space: nowrap;
  &.${activeClassName} {
    font-weight: 600;
    justify-content: center;
    color: #ffffff;
  }
  :hover {
    color: #09008a;
    text-shadow: 0px 0px 4px #ccceff;
    font-weight: bold;
  }
  ,
  :focus {
    color: #ffffff;
  }
`

export default function Header() {
  const { account, chainId } = useActiveWeb3React()
  const userEthBalance = useNativeCurrencyBalances(account ? [account] : [])?.[account ?? '']

  const {
    addNetworkInfo: {
      nativeCurrency: { symbol: nativeCurrencySymbol },
    },
  } = CHAIN_INFO[chainId ? chainId : SupportedChainId.MAINNET]
  //{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
  return (
    <>
      <HeaderFrame showBackground={false}>
        <UniIcon>
          <img src={ApeMotorcycleLogo} alt="logo" style={{ width: '80px', height: '80px', paddingTop: '5px' }}></img>
        </UniIcon>
        <HeaderLinks>
          <StyledNavLink id={'/Dashboard'} to={'/Dashboard'}>
            <Trans> Home </Trans>
          </StyledNavLink>
          <StyledNavLink id={'/Swap'} to={'/Swap'}>
            <Trans>Swap </Trans>
          </StyledNavLink>
          <div>
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
        </HeaderLinks>
        <HeaderControls>
          <HeaderElement>
            <NetworkSelector />
          </HeaderElement>
          <HeaderElement>
            <AccountElement active={!!account}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0, userSelect: 'none' }}>
                  <Trans>
                    {userEthBalance?.toSignificant(3)} {nativeCurrencySymbol}
                  </Trans>
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          <HeaderElement></HeaderElement>
        </HeaderControls>
      </HeaderFrame>
    </>
  )
}
