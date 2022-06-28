import './styles.css'
import 'animate.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther, formatUnits } from '@ethersproject/units'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { PurpleCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components/macro'

import { isMobile } from '../../utils/userAgent'
//import Path23 from '../../assets/images/Path23.png'
const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  left: 25px;
  font-size: 18px;
  text-color: #ffffff;
  font-weight: bold;
`
const Styledmobiletext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  left: 25px;
  font-size: 12px;
  text-color: #ffffff;
  font-weight: bold;
`
const Styledtext1 = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  left: 250px;
  font-size: 18px;
  text-color: #ffffff;
  font-weight: bold;
  text-align: right;
`
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const UserTokenBalance = () => {
  //const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [userBalance, setuserBalance] = useState(Number)
  //const [claimableBalance, setclaimableBalance] = useState(Number)
  const [Reserve0, setReserve0] = useState(Number)
  const [Reserve1, setReserve1] = useState(Number)
  const [SHIReserve0, setSHIReserve0] = useState(Number)
  const [SHIReserve1, setSHIReserve1] = useState(Number)
  const [holders, setholders] = useState(Number)
  const [hidden, sethidden] = useState(Boolean)
  const ScrollY = useScrollPosition()
  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
    delay: 2,
  })

  //const [MriPrice, setMriPrice] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  const [loading, setLoading] = useState(true)

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  useEffect(() => {
    async function FetchBalance() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        //setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec'
        const contract = new Contract(contractaddress, abi, provider)
        const UserTokenBalance = await contract.balanceOf(account)
        const FinalResult = await UserTokenBalance.toString()
        return FinalResult
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchReserve0() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        const provider = new Web3Provider(library.provider)
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
        const provider = new Web3Provider(library.provider)
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
    async function FetchSHIReserve0() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x3ee197c0434ef9fcef00c7cf338858a85e551640&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0x3ee197c0434ef9fcef00c7cf338858a85e551640' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve0 = await Price._reserve0
        const ShiReserve0 = Reserve0.toString()
        return ShiReserve0
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        //setLoading(true)
      }
    }
    async function FetchSHIReserve1() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const provider = new Web3Provider(library.provider)
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

    async function Ishidden() {
      if (ScrollY < 30) {
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
    FetchReserve1()
      .then((result) => formatUnits(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve1(result))

    FetchReserve0()
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve0(result))

    FetchBalance()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setuserBalance(result))

    FetchSHIReserve1()
      .then((result) => formatUnits(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setSHIReserve1(result))

    FetchSHIReserve0()
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setSHIReserve0(result))

    FetchHolders().then((result) => setholders(result))
  }, [account, showConnectAWallet, library.provider])

  const WifePrice = Reserve0 / Reserve1
  const WifePriceinUsd = WifePrice / 1000000

  //const wifeprice = WifePriceinUsd.toFixed(5)
  //const Reserve2price = Reserve2math * 1000000
  const YourBalanceValue = (WifePriceinUsd * userBalance).toFixed(2)
  const shiprice = SHIReserve0 / SHIReserve1
  const SHIPriceinUSD = shiprice / 20000000000000
  console.log(SHIPriceinUSD)
  //const SHIinvestmentValue = SHIPriceinUSD * 2292061013
  const wifeprice = WifePriceinUsd.toFixed(5)
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

  console.log(n) // "234,234.555"
  //const MRIInvestmentValue = MriPrice * 89465
  //const InvestmentValue = SHIinvestmentValue + MRIInvestmentValue
  //const FormatedInvestmentValue = InvestmentValue.toFixed(1)
  if (isMobile)
    return (
      <div className={'whitetext'}>
        <div className={'flexbox-vertical-container'}>
          <div className={'whitetext'}>
            <div className="flexbox-vertical-container">
              <PurpleCard
                style={{
                  maxWidth: 600,
                  width: 400,
                  position: 'relative',
                  marginTop: '75px',
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                }}
              >
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
                  Token Statistics{' '}
                </h1>
                <PurpleCard style={{ marginBottom: '10px' }}>
                  <div className="flexbox-container">
                    {' '}
                    <Styledmobiletext>Holders{''}</Styledmobiletext>
                    {''} <Styledmobiletext style={{ position: 'relative', left: 175 }}> {holders} </Styledmobiletext>
                  </div>
                </PurpleCard>
                <PurpleCard style={{ marginBottom: '10px' }}>
                  <div className="flexbox-container">
                    {' '}
                    <Styledmobiletext>Market Capitalization{''}</Styledmobiletext>
                    {''}
                    <div hidden={loading}>
                      <Styledmobiletext style={{ position: 'relative', left: 100 }}>{MarketCap} </Styledmobiletext>{' '}
                    </div>{' '}
                    {loading ? (
                      <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                    ) : (
                      ''
                    )}
                  </div>
                </PurpleCard>
                <PurpleCard style={{ marginBottom: '10px' }}>
                  <div style={{ justifyContent: 'right', textAlign: 'right' }} className="flexbox-container">
                    {' '}
                    <Styledmobiletext>Liquidity {''}</Styledmobiletext>
                    <div hidden={loading}>
                      <Styledmobiletext style={{ position: 'relative', alignSelf: 'right', left: 250 }}>
                        ${TotalLiquidity}{' '}
                      </Styledmobiletext>{' '}
                    </div>{' '}
                    {loading ? (
                      <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                    ) : (
                      ''
                    )}
                  </div>
                </PurpleCard>
                <PurpleCard style={{ marginBottom: '10px' }}>
                  <div className="flexbox-container">
                    {' '}
                    <Styledmobiletext>$Wife Price {''}</Styledmobiletext>
                    <div hidden={loading}>
                      <Styledmobiletext style={{ position: 'relative', left: 175 }}>${wifeprice} </Styledmobiletext>{' '}
                    </div>{' '}
                    {loading ? (
                      <Spin style={{ position: 'relative', left: 175 }} indicator={antIcon} className="add-spinner" />
                    ) : (
                      ''
                    )}
                  </div>
                </PurpleCard>
              </PurpleCard>
              <p></p>
              <PurpleCard
                style={{
                  maxWidth: 600,
                  width: 400,
                  position: 'relative',
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                }}
              >
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
                  User Statistics
                </h1>
                <PurpleCard style={{ marginBottom: '10px' }}>
                  <div className="flexbox-container">
                    {' '}
                    <Styledmobiletext>Your Token Balance {''} </Styledmobiletext>
                    {''}{' '}
                    <Styledmobiletext style={{ position: 'relative', left: 100 }}> {userBalance} </Styledmobiletext>
                  </div>
                </PurpleCard>
                <PurpleCard style={{ marginBottom: '10px' }}>
                  <div className="flexbox-container">
                    {' '}
                    <Styledmobiletext>Your Token Balance Value {''}</Styledmobiletext>
                    {''}{' '}
                    <Styledmobiletext style={{ position: 'relative', left: 100 }}>
                      {' '}
                      ${YourBalanceValue}{' '}
                    </Styledmobiletext>
                  </div>
                </PurpleCard>
                <PurpleCard style={{ marginBottom: '10px' }}>
                  <div className="flexbox-container">
                    {' '}
                    <Styledmobiletext>Total Buybacks Done{''}</Styledmobiletext>
                    {''} <Styledmobiletext style={{ position: 'relative', left: 75 }}> $11,347 </Styledmobiletext>
                  </div>
                </PurpleCard>
                <PurpleCard style={{ marginBottom: '10px' }}>
                  <div className="flexbox-container">
                    {' '}
                    <Styledmobiletext>Treasury Balance{''}</Styledmobiletext>
                    {''} <Styledmobiletext style={{ position: 'relative', left: 75 }}> $82,345 </Styledmobiletext>
                  </div>
                </PurpleCard>
              </PurpleCard>
            </div>
          </div>
        </div>
      </div>
    )
  else
    return (
      <>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key}>
                <div className={'animate__animated animate__animate__fadeInDown'}>
                  <div className={'whitetext'}>
                    <div className={'flexbox-vertical-container'}>
                      <div className={'whitetext'}>
                        <div className="flexbox-container">
                          <PurpleCard
                            style={{
                              maxWidth: 900,
                              width: 600,
                              position: 'relative',
                              right: 15,
                              marginTop: '75px',
                              boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                            }}
                          >
                            <h1
                              style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontFamily: 'Geneva, Verdana, sans-serif',
                              }}
                            >
                              Token Statistics{' '}
                            </h1>
                            <PurpleCard style={{ marginBottom: '10px' }}>
                              <div className="flexbox-container">
                                {' '}
                                <Styledtext>Holders{''}</Styledtext>
                                {''} <Styledtext1 style={{ position: 'relative', left: 410 }}> {holders} </Styledtext1>
                              </div>
                            </PurpleCard>
                            <PurpleCard style={{ marginBottom: '10px' }}>
                              <div className="flexbox-container">
                                {' '}
                                <Styledtext>Market Capitalization{''}</Styledtext>
                                {''}
                                <div hidden={loading}>
                                  <Styledtext1 style={{ position: 'relative', left: 225 }}>{MarketCap} </Styledtext1>{' '}
                                </div>{' '}
                                {loading ? (
                                  <Spin
                                    style={{ position: 'relative', left: 265 }}
                                    indicator={antIcon}
                                    className="add-spinner"
                                  />
                                ) : (
                                  ''
                                )}
                              </div>
                            </PurpleCard>
                            <PurpleCard style={{ marginBottom: '10px' }}>
                              {' '}
                              <div className="flexbox-container">
                                <Styledtext>Liquidity {''}</Styledtext>
                                <div hidden={loading}>
                                  <Styledtext1 style={{ position: 'relative', left: 300 }}>
                                    ${TotalLiquidity}{' '}
                                  </Styledtext1>{' '}
                                  {loading ? (
                                    <Spin
                                      style={{ position: 'relative', left: 300 }}
                                      indicator={antIcon}
                                      className="add-spinner"
                                    />
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </div>
                            </PurpleCard>
                            <PurpleCard style={{ marginBottom: '10px' }}>
                              <div className="flexbox-container">
                                {' '}
                                <Styledtext>$Wife Price {''}</Styledtext>
                                <div hidden={loading}>
                                  <Styledtext1 style={{ position: 'relative', left: 350 }}>${wifeprice} </Styledtext1>{' '}
                                </div>{' '}
                                {loading ? (
                                  <Spin
                                    style={{ position: 'relative', left: 350 }}
                                    indicator={antIcon}
                                    className="add-spinner"
                                  />
                                ) : (
                                  ''
                                )}
                              </div>
                            </PurpleCard>
                          </PurpleCard>
                          <p></p>
                          <PurpleCard
                            style={{
                              maxWidth: 900,
                              width: 600,
                              position: 'relative',
                              left: 15,
                              marginTop: '75px',
                              boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                            }}
                          >
                            <h1
                              style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontFamily: 'Geneva, Verdana, sans-serif',
                              }}
                            >
                              User Statistics
                            </h1>
                            <PurpleCard style={{ marginBottom: '10px' }}>
                              <div className="flexbox-container">
                                {' '}
                                <Styledtext>Your Token Balance {''} </Styledtext>
                                {''} <Styledtext1> {userBalance} </Styledtext1>
                              </div>
                            </PurpleCard>
                            <PurpleCard style={{ marginBottom: '10px' }}>
                              <div className="flexbox-container">
                                {' '}
                                <Styledtext>Your Token Balance Value {''}</Styledtext>
                                {''}{' '}
                                <Styledtext1 style={{ position: 'relative', right: 25 }}>
                                  {' '}
                                  ${YourBalanceValue}{' '}
                                </Styledtext1>
                              </div>
                            </PurpleCard>
                            <PurpleCard style={{ marginBottom: '10px' }}>
                              <div className="flexbox-container">
                                {' '}
                                <Styledtext>Total Buybacks Done{''}</Styledtext>
                                {''} <Styledtext1> $11,347 </Styledtext1>
                              </div>
                            </PurpleCard>
                            <PurpleCard style={{ marginBottom: '10px' }}>
                              <div className="flexbox-container">
                                {' '}
                                <Styledtext>Treasury Balance{''}</Styledtext>
                                {''} <Styledtext1> $82,345 </Styledtext1>
                              </div>
                            </PurpleCard>
                          </PurpleCard>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </animated.div>
            )
        )}
      </>
    )
}
export default UserTokenBalance
