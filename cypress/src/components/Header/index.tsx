/* eslint-disable simple-import-sort/imports */
//import { PieChartOutlined } from '@ant-design/icons'
import { Trans } from '@lingui/macro'
import useScrollPosition from '@react-hook/window-scroll'
//import { Button, Menu } from 'antd'
import { CHAIN_INFO } from 'constants/chainInfo'
import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useTheme from 'hooks/useTheme'
import { darken } from 'polished'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
//import { useDarkModeManager } from 'state/user/hooks'
import { useNativeCurrencyBalances } from 'state/wallet/hooks'
import styled from 'styled-components/macro'

import mcdegenlogo from '../../assets/images/mcdegenlogo.png'
//import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ExternalLink } from '../../theme'
//import Menu from '../Menu' - this is the menu that includes uniswaps docs etc.
import Row from '../Row'
import Web3Status from '../Web3Status'
import NetworkSelector from './NetworkSelector'
//import { Link } from 'react-scroll'

const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding: 1rem;
  z-index: 21;
  position: relative;
  /* Background slide effect on scroll. */
  background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`};
  background-position: ${({ showBackground }) => (showBackground ? '0 -100%' : '0 0')};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : 'transparent;')};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: 48px 1fr 1fr;
  `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:  1rem;
    grid-template-columns: 1fr 1fr;
  `};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding:  1rem;
    grid-template-columns: 36px 1fr;
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`
const Logo = styled.img`
alt="logo" 
width="24px" 
height="100%"
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
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: center;
  `};
`

const HeaderLinks = styled(Row)`
  justify-self: center;
  background-color: ${({ theme }) => theme.bg0};
  width: fit-content;
  padding: 2px;
  border-radius: 16px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
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
    justify-content: space-between;
    justify-self: center;
    z-index: 99;
    position: fixed;
    bottom: 0; right: 50%;
    transform: translate(50%,-50%);
    margin: 0 auto;
    background-color: ${({ theme }) => theme.bg0};
    border: 1px solid ${({ theme }) => theme.bg2};
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg0 : theme.bg0)};
  border-radius: 16px;
  text-color: #000000;
  white-space: nowrap;
  width: 100%;
  height: 40px;
  :focus {
    border: 10px solid blue;
  }
`

const UNIAmount = styled(AccountElement)`
  color: white;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.bg3};
  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;
`

const UNIWrapper = styled.span`
  width: fit-content;
  position: relative;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.9;
  }
`

//const BalanceText = styled(Text)`
//  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//    display: none;
//  `};
//`

const BalanceText = styled.text`
  color: #000000;
  font-size: '18px';
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
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
  color: #000000;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 12px;
  word-break: break-word;
  overflow: hidden;
  white-space: nowrap;
  &.${activeClassName} {
    border-radius: 14px;
    font-weight: 600;
    justify-content: center;
    color: #000000;
    background-color: ${({ theme }) => theme.bg0};
  }
  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const StyledExternalLink = styled(ExternalLink).attrs({
  activeClassName,
})<{ isActive?: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;
  &.${activeClassName} {
    border-radius: 14px;
    font-weight: 600;
    color: #000000;
  }
  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
    text-decoration: none;
  }
`

export default function Header() {
  const { account, chainId } = useActiveWeb3React()
  const [collapse, setcollapse] = useState(Boolean)
  const userEthBalance = useNativeCurrencyBalances(account ? [account] : [])?.[account ?? '']
  const scrollY = useScrollPosition()

  const {
    addNetworkInfo: {
      nativeCurrency: { symbol: nativeCurrencySymbol },
    },
  } = CHAIN_INFO[chainId ? chainId : SupportedChainId.MAINNET]
  //{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
  return (
    <>
      <HeaderFrame showBackground={scrollY > 1005}>
        <UniIcon>
          <Logo src={mcdegenlogo} alt="logo" width="50px" height="100%"></Logo>
        </UniIcon>
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
