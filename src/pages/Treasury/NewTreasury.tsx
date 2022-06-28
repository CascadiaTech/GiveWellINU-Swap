import '../DashBoard/styles.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider } from '@ethersproject/providers'
import { formatUnits } from '@ethersproject/units'
//import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import TreasuryChartIcon from 'assets/images/treasury-chart-icon.png'
import { LightPurpleCard, PurpleCard, TreasuryCard } from 'components/Card'
import { TransparentCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

//import { useTransition } from 'react-spring'
import Assets_icon from '../../assets/images/Assets_icon.png'
import Currency_icon from '../../assets/images/Currency_icon.png'
import Line_pic from '../../assets/images/Line_pic.png'
import Wallet_icon from '../../assets/images/Wallet_icon.png'
import { ExternalLink } from '../../theme'
import { isMobile } from '../../utils/userAgent'
import ClaimTransaction from '../DashBoard/ClaimTransaction'
const activeClassName = 'ACTIVE'
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
    color: #000000;
    text-decoration: none;
  }
`
export default function Treasurysectionnew() {
  //const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [Reserve0, setReserve0] = useState(Number)
  const [Reserve1, setReserve1] = useState(Number)
  const [STATSReserve0, setSTATSReserve0] = useState(Number)
  const [STATSReserve1, setSTATSReserve1] = useState(Number)
  const [holders, setholders] = useState(Number)
  const [DoggerPrice, setDoggerPrice] = useState(Number)
  const [MRIPrice, setMRIPrice] = useState(Number)
  const [StiltPrice, setStiltPrice] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  const [loading, setLoading] = useState(true)

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  useEffect(() => {
    async function FetchReserve0() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        //const provider = new Web3Provider(library.provider)
        const provider = getDefaultProvider()
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x3ee197c0434ef9fcef00c7cf338858a85e551640&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0x3ee197c0434ef9fcef00c7cf338858a85e551640' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve0 = await Price._reserve0
        const DisplayReserve0 = Reserve0.toString()
        console.log(DisplayReserve0)
        return DisplayReserve0
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchReserve1() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        //const provider = new Web3Provider(library.provider)
        const provider = getDefaultProvider()
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x3ee197c0434ef9fcef00c7cf338858a85e551640&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0x3ee197c0434ef9fcef00c7cf338858a85e551640' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve1 = await Price._reserve1
        const Reserve1display = Reserve1.toString()
        return Reserve1display
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchSTATSReserve0() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        //const provider = new Web3Provider(library.provider)
        const provider = getDefaultProvider()
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0xF2692f152dc96CdAc4BA5be7Ac53762b4dBF2Fc9&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0xF2692f152dc96CdAc4BA5be7Ac53762b4dBF2Fc9' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve0 = await Price._reserve0
        const STATSDisplayReserve0 = Reserve0.toString()
        return STATSDisplayReserve0
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchSTATSReserve1() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        //const provider = new Web3Provider(library.provider)
        const provider = getDefaultProvider()
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0xF2692f152dc96CdAc4BA5be7Ac53762b4dBF2Fc9&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0xF2692f152dc96CdAc4BA5be7Ac53762b4dBF2Fc9' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve1 = await Price._reserve1
        const STATSReserve1display = Reserve1.toString()
        return STATSReserve1display
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchDoggerPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getTokenInfo/0x56143E2736C1b7F8A7d8C74707777850b46ac9aF?apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract
        const data = await response.json()
        const DoggerPrice = data.price.rate
        return DoggerPrice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    async function FetchMRIPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getTokenInfo/0x0913dDAE242839f8995c0375493f9a1A3Bddc977?apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract

        const data = await response.json()
        const MRIPrice = data.price.rate
        return MRIPrice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchStiltPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getTokenInfo/0x06fcbf38e823efc1e609b9491AaB546334c6ee69?apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract

        const data = await response.json()
        const StiltPrice = data.price.rate
        return StiltPrice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    async function FetchHolders() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getTokenInfo/0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec?apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract

        const data = await response.json()
        const holders = data.holdersCount
        return holders
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    FetchReserve1()
      .then((result) => formatUnits(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve1(result))

    FetchReserve0()
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve0(result))

    FetchSTATSReserve1()
      .then((result) => formatUnits(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setSTATSReserve1(result))

    FetchSTATSReserve0()
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setSTATSReserve0(result))

    FetchHolders().then((result) => setholders(result))
    FetchDoggerPrice().then((result) => setDoggerPrice(result))
    FetchMRIPrice().then((result) => setMRIPrice(result))
    FetchStiltPrice().then((result) => setStiltPrice(result))
  }, [account, showConnectAWallet, library.provider])

  const WifePrice = Reserve0 / Reserve1
  const WifePriceinUsd = WifePrice / 1000000

  const STATSPrice = STATSReserve0 / STATSReserve1
  const STATSPriceinUsd = STATSPrice / 100000000000000000
  console.log(STATSPriceinUsd)
  //const calc = (STATSPriceinUsd / 0.0256) * 100
  const calc = 56
  const DoggerPriceNear = DoggerPrice / 0.002478 - 1
  const DoggerPriceInProfit = (DoggerPriceNear * 100).toFixed(2)
  const MRIPriceCalc = MRIPrice / 0.0547
  const MRIPriceInProfit = (MRIPriceCalc * 10).toFixed(2)
  const StiltPriceCalc = StiltPrice / 0.000002588 - 1
  const StiltPriceInProfit = (StiltPriceCalc * 100).toFixed(2)
  console.log(StiltPriceInProfit)
  const Marketcap = WifePriceinUsd * 100000000 // essentially jpegusd price divided by total supply
  //const MarketCap = Marketcap.toLocaleString()
  const ReserveBinusd = WifePriceinUsd * Reserve1
  const reserve0value = Reserve0 / 1000000
  const Totalliquidity = reserve0value + ReserveBinusd
  const TotalLiquidity = Totalliquidity.toLocaleString()

  function formatMoney(n: any) {
    return '$ ' + (Math.round(n * 100) / 100).toLocaleString()
  }
  function numberWithCommas(num: any) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const n = numberWithCommas(Totalliquidity)
  const MarketCap = formatMoney(Marketcap)

  const DoggerChartURL = 'https://www.dextools.io/app/ether/pair-explorer/0x6c8ae94331d7f9bf7a1f3e0b1480ccfd46d1a723'
  const StiltonChartURL = 'https://www.dextools.io/app/ether/pair-explorer/0x779dac1f4df345acb6ee814afda755f1693770cb'
  const MRIChartURL = 'https://www.dextools.io/app/ether/pair-explorer/0xaae64809138f576b0b50f1d898dd99055327c2d3'
  const SATSChartURL = 'https://www.dextools.io/app/ether/pair-explorer/0xa010e37405eb57437a381daae88e5c3913d0796c'
  //[        <div style={{ justifyContent: 'center', marginLeft: '100px' }} className={'flexbox-vertical-container'}>
  // <div className={'flexbox-vertical-container'}>
  //<div className={'center-icon-mobile'}>
  //  <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
  //   <img className={'card-icon'} src={Assets_icon} alt="Assets"></img>
  // </LightPurpleCard>
  // </div>
  // <div className={'MarketCap-mobile'}>
  //   <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
  //    <img className={'card-icon'} src={Currency_icon} alt="Currency"></img>
  //  </LightPurpleCard>
  // </div>
  // <div className={'Wallet-mobile'}>
  //  <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
  //   <img className={'card-icon'} src={Wallet_icon} alt="Walletimg"></img>
  //  </LightPurpleCard>
  // </div>
  //</div>
  //</div>]

  console.log(n)
  if (isMobile)
    return (
      <>
        <ClaimTransaction></ClaimTransaction>
        <div className="flexbox-vertical-container">
          <div className={'flexbox-vertical-container'}>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard style={{ marginRight: 50, maxWidth: 400, maxHeight: 250, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>Liquidity</h2>
                  <div hidden={loading}>
                    {' '}
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{TotalLiquidity}</h2>
                  </div>
                  {loading ? (
                    <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                  ) : (
                    ''
                  )}
                  <img className={'img-size'} src={Line_pic} alt="line"></img>
                  <p></p>
                </div>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard style={{ marginTop: '25px', maxWidth: 400, maxHeight: 250, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>Holders</h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{holders}</h2>
                  </div>
                  {loading ? (
                    <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                  ) : (
                    ''
                  )}
                  <img className={'img-size'} src={Line_pic} alt="line"></img>
                  <p></p>
                </div>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard style={{ marginTop: '25px', maxWidth: 300, maxHeight: 200, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>MarketCap</h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{MarketCap}</h2>
                  </div>
                  {loading ? (
                    <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                  ) : (
                    ''
                  )}
                  <img className={'img-size'} src={Line_pic} alt="line"></img>
                  <p></p>
                </div>
              </PurpleCard>
            </div>
          </div>
        </div>
      </>
    )
  else
    return (
      <>
        <ClaimTransaction></ClaimTransaction>
        <div className={'flexbox-vertical-container'}>
          <h1> Treasury</h1>

          <div className={'flexbox-container'}>
            <div className={'center-icon'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Assets_icon} alt="Assets"></img>
              </LightPurpleCard>
            </div>
            <div className={'MarketCap'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Currency_icon} alt="Currency"></img>
              </LightPurpleCard>
            </div>
            <div className={'Wallet'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Wallet_icon} alt="Walletimg"></img>
              </LightPurpleCard>
            </div>
          </div>
        </div>
        <div className="flexbox-vertical-container">
          <div className={'flexbox-container'}>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard style={{ marginRight: 50, maxWidth: 400, maxHeight: 250, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>Liquidity</h2>
                  <div hidden={loading}>
                    {' '}
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{TotalLiquidity}</h2>
                  </div>
                  {loading ? (
                    <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                  ) : (
                    ''
                  )}
                  <img className={'img-size'} src={Line_pic} alt="line"></img>
                  <p></p>
                </div>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard style={{ maxWidth: 400, maxHeight: 250, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>Holders</h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{holders}</h2>
                  </div>
                  {loading ? (
                    <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                  ) : (
                    ''
                  )}
                  <img className={'img-size'} src={Line_pic} alt="line"></img>
                  <p></p>
                </div>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard style={{ marginLeft: 50, maxWidth: 300, maxHeight: 200, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>MarketCap</h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{MarketCap}</h2>
                  </div>
                  {loading ? (
                    <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                  ) : (
                    ''
                  )}
                  <img className={'img-size'} src={Line_pic} alt="line"></img>
                  <p></p>
                </div>
              </PurpleCard>
            </div>
          </div>
        </div>
        <div className={'flexbox-vertical-container'}>
          <TreasuryCard style={{ marginTop: '30px' }}>
            <div style={{ marginTop: '30px' }} className={'whitetext'}>
              <div className="flexbox-container-align">
                <div style={{ marginRight: '3vw' }}>Date</div>
                <div style={{ marginRight: '0px' }}>Token</div>
                <div style={{ marginRight: '5px' }}>Amount($)</div>
                <div style={{ marginRight: '25px' }}>Entry Price</div>
                <div style={{ marginRight: '10px' }}>Tokens</div>
                <div style={{ marginRight: '65px' }}>Profit %</div>
              </div>
            </div>
            <div className={'darktext'}>
              <div className="flex-container">
                <h4 style={{ marginLeft: '10px' }}> 2022-04-22 </h4>
                <div style={{ marginLeft: '3vw' }}>SATS</div>
                <div>$2,800 </div>
                <div>$0.0256</div>
                <div>110,056</div>
                <div>
                  {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
                  {calc}%
                </div>
                <StyledExternalLink className={'six'} href={SATSChartURL}>
                  <p
                    style={{
                      backgroundColor: '#a675c8',
                      height: '35px',
                      width: '100px',
                      boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.3)',
                      border: '1px solid',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      textAlign: 'center',
                      alignItems: 'center',
                      borderColor: '#000000',
                      lineHeight: '35px',
                      borderRadius: '5px',
                      margin: '10px',
                    }}
                  >
                    Chart
                    <img
                      src={TreasuryChartIcon}
                      style={{ width: '30px', height: '30px', float: 'right' }}
                      alt="icon"
                    ></img>
                  </p>
                </StyledExternalLink>
              </div>
              <p></p>
              <div className="flex-container">
                <h4 style={{ marginLeft: '10px' }}> 2022-04-14 </h4>
                <div style={{ marginLeft: '3vw' }}>Dogger</div>
                <div>$2,400.94 </div>
                <div>$0.0024</div>
                <div>970,123</div>
                <div>
                  {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
                  {DoggerPriceInProfit}%
                </div>
                <StyledExternalLink id={'charts-nav-link'} href={DoggerChartURL}>
                  <p
                    style={{
                      backgroundColor: '#a675c8',
                      height: '35px',
                      width: '100px',
                      boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.3)',
                      border: '1px solid',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      textAlign: 'center',
                      alignItems: 'center',
                      borderColor: '#000000',
                      lineHeight: '35px',
                      borderRadius: '5px',
                      margin: '10px',
                    }}
                  >
                    Chart
                    <img
                      src={TreasuryChartIcon}
                      style={{ width: '30px', height: '30px', float: 'right' }}
                      alt="icon"
                    ></img>
                  </p>
                </StyledExternalLink>
              </div>
              <p></p>
              <div className="flex-container">
                <h4 style={{ marginLeft: '10px' }}> 2022-04-02</h4>
                <div style={{ marginLeft: '3vw' }}>MRI</div>
                <div>$4,622.99</div>
                <div>$0.063</div>
                <div>89,465</div>
                <div>
                  {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
                  {MRIPriceInProfit}%
                </div>
                <StyledExternalLink id={'charts-nav-link'} href={MRIChartURL}>
                  <p
                    style={{
                      backgroundColor: '#a675c8',
                      height: '35px',
                      width: '100px',
                      boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.3)',
                      border: '1px solid',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      textAlign: 'center',
                      alignItems: 'center',
                      borderColor: '#000000',
                      lineHeight: '35px',
                      borderRadius: '5px',
                      margin: '10px',
                    }}
                  >
                    Chart
                    <img
                      src={TreasuryChartIcon}
                      style={{ width: '30px', height: '30px', float: 'right' }}
                      alt="icon"
                    ></img>
                  </p>
                </StyledExternalLink>
              </div>
              <p></p>
              <div className="flex-container">
                <h4 style={{ marginLeft: '10px' }}> 2022-04-05</h4>
                <div style={{ marginLeft: '3vw' }}>Stilton</div>
                <div>$3,448.00 </div>
                <div>$0.000002588</div>
                <div> 1.33 billion</div>
                <div>
                  {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
                  {StiltPriceInProfit}%
                </div>
                <StyledExternalLink id={'charts- nav-link'} href={StiltonChartURL}>
                  <p
                    style={{
                      backgroundColor: '#a675c8',
                      height: '35px',
                      width: '100px',
                      boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.3)',
                      border: '1px solid',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      textAlign: 'center',
                      alignItems: 'center',
                      borderColor: '#000000',
                      lineHeight: '35px',
                      borderRadius: '5px',
                      margin: '10px',
                    }}
                  >
                    Chart
                    <img
                      src={TreasuryChartIcon}
                      style={{ width: '30px', height: '30px', float: 'right' }}
                      alt="icon"
                    ></img>
                  </p>
                </StyledExternalLink>
              </div>
              <p></p>
              <p></p>
              <TransparentCard></TransparentCard>
              <div className={'flexbox-container'}>
                <div className={'treasury-card'}>
                  <h4 style={{ paddingLeft: '1vw' }}>Trade Balance</h4>
                  <div style={{ marginLeft: '12vw' }}>$8,652</div>
                </div>
                <div className={'treasury-card'} style={{ marginLeft: '5vw' }}>
                  <h4 style={{ paddingLeft: '1vw' }}>USDC Balance</h4>
                  <div style={{ marginLeft: '12vw' }}>$66,642</div>
                </div>
              </div>
              <p></p>
              <div className={'flexbox-container'}>
                <div className={'treasury-card'}>
                  <p style={{ paddingLeft: '1vw' }}>ETH Balance</p>
                  <div style={{ marginLeft: '12vw' }}>$1,653</div>
                </div>
                <div className={'treasury-card'} style={{ marginLeft: '5vw' }}>
                  <h4 style={{ paddingLeft: '1vw' }}>Total Balance</h4>
                  <div style={{ marginLeft: '12vw' }}>$76,947</div>
                </div>
              </div>
            </div>
          </TreasuryCard>
        </div>
      </>
    )
}
