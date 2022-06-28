import './styles.css'
import 'animate.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatUnits } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

//import styled from 'styled-components/macro'
import { DarkCard, LightGreyCard } from '../../components/Card'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'

const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  text-color: #ffffff;
  font-weight: bold;
  text-align: center;
  position: relative;
  right: 70px;
  bottom: 30px;
`

export default function NFTtable() {
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  //const [EthReserves, setEthReserves] = useState(Number)
  //const [JpegReserves, setJpegReserves] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  const [loading, setLoading] = useState(true)
  const [Reserve0, setReserve0] = useState(Number)
  const [Reserve1, setReserve1] = useState(Number)
  const [SHIReserve0, setSHIReserve0] = useState(Number)
  const [SHIReserve1, setSHIReserve1] = useState(Number)
  const [holders, setholders] = useState(Number)
  const [MriPrice, setMriPrice] = useState(Number)

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  useEffect(() => {
    //const provider = new Web3Provider(library.provider)
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

    async function FetchReserve0() {
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
        const DisplayReserve0 = Reserve0.toString()
        return DisplayReserve0
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        //setLoading(true)
      }
    }
    async function FetchReserve1() {
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
    async function FetchMriPrice() {
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
        const holders = data.price.rate
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

    FetchMriPrice().then((result) => setMriPrice(result))
  }, [account, showConnectAWallet, library.provider])
  const shiprice = SHIReserve0 / SHIReserve1
  const SHIPriceinUSD = shiprice / 1000000
  const WifePrice = Reserve0 / Reserve1
  const WifePriceinUsd = WifePrice / 1000000
  const wifeprice = WifePriceinUsd.toFixed(5)
  const Marketcap = (WifePriceinUsd * 100000000).toFixed(0) // essentially jpegusd price divided by total supply
  const MarketCap = Marketcap.toLocaleString()
  const ReserveBinusd = WifePriceinUsd * Reserve1
  const reserve0value = Reserve0 / 1000000
  const Totalliquidity = (reserve0value + ReserveBinusd).toFixed(0)
  const TotalLiquidity = Totalliquidity.toLocaleString()
  const InvestmentValue = MriPrice * 89465
  const FormatInvestment = InvestmentValue.toFixed(2)
  const FormatPrice = MriPrice.toFixed(4)

  return (
    <>
      <div className={'animate__animated animate__backInRight'}>
        <div className={'darktext'}>
          <div className="flexbox-container">
            <LightGreyCard
              style={{
                position: 'relative',
                maxWidth: 800,
                width: 475,
                boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
              }}
            >
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
                Company Metrics
              </h1>
              <div className="flexbox-container">
                <DarkCard
                  style={{
                    maxWidth: 200,
                    maxHeight: 50,
                    position: 'relative',
                    paddingLeft: 75,
                    left: 10,
                    paddingTop: 50,
                    paddingRight: 75,
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                  }}
                >
                  <div hidden={loading}>
                    <Styledtext>Liquidity {TotalLiquidity} </Styledtext>{' '}
                  </div>{' '}
                  {loading ? (
                    <Spin
                      style={{ position: 'relative', bottom: 20, left: 10 }}
                      indicator={antIcon}
                      className="add-spinner"
                    />
                  ) : (
                    ''
                  )}
                </DarkCard>
                <DarkCard
                  style={{
                    maxWidth: 200,
                    maxHeight: 50,
                    position: 'relative',
                    left: 30,
                    paddingLeft: 75,
                    paddingTop: 50,
                    paddingRight: 75,
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                  }}
                >
                  <div hidden={loading}>
                    <Styledtext>Valuation {MarketCap} </Styledtext>{' '}
                  </div>{' '}
                  {loading ? (
                    <Spin
                      style={{ position: 'relative', bottom: 20, right: 10 }}
                      indicator={antIcon}
                      className="add-spinner"
                    />
                  ) : (
                    ''
                  )}
                </DarkCard>
              </div>
              <p></p>
              <p></p>
              <div className="flexbox-container">
                <DarkCard
                  style={{
                    maxWidth: 200,
                    maxHeight: 50,
                    position: 'relative',
                    left: 10,
                    paddingLeft: 75,
                    alignItems: 'center',
                    paddingTop: 50,
                    paddingRight: 75,
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                  }}
                >
                  <div hidden={loading}>
                    <Styledtext>Price {wifeprice} </Styledtext>{' '}
                  </div>{' '}
                  {loading ? (
                    <Spin
                      style={{ position: 'relative', bottom: 20, left: 10 }}
                      indicator={antIcon}
                      className="add-spinner"
                    />
                  ) : (
                    ''
                  )}
                </DarkCard>
                <DarkCard
                  style={{
                    maxWidth: 200,
                    maxHeight: 50,
                    position: 'relative',
                    left: 30,
                    paddingLeft: 75,
                    paddingTop: 50,
                    paddingRight: 75,
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                  }}
                >
                  <Styledtext> Holders {holders} </Styledtext>
                </DarkCard>
              </div>
            </LightGreyCard>

            <LightGreyCard
              style={{
                position: 'relative',
                left: 10,
                maxWidth: 600,
                width: 500,
                boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
              }}
            >
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
                Assets Under Managment
              </h1>
              <div className="flexbox-container">
                <DarkCard
                  style={{
                    maxWidth: 200,
                    maxHeight: 50,
                    position: 'relative',
                    left: 10,
                    paddingLeft: 75,
                    paddingTop: 50,
                    paddingRight: 75,
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                  }}
                >
                  {' '}
                  <Styledtext> Symbol: MRI</Styledtext>
                </DarkCard>

                <DarkCard
                  style={{
                    maxWidth: 200,
                    maxHeight: 50,
                    position: 'relative',
                    left: 30,
                    paddingLeft: 75,
                    paddingTop: 50,
                    paddingRight: 75,
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                  }}
                >
                  {' '}
                  <Styledtext> Amount: 89,465</Styledtext>
                </DarkCard>
              </div>
              <p></p>
              <p></p>
              <div className="flexbox-container">
                <DarkCard
                  style={{
                    maxWidth: 200,
                    maxHeight: 50,
                    position: 'relative',
                    left: 10,
                    paddingLeft: 75,
                    paddingTop: 50,
                    paddingRight: 75,
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                  }}
                >
                  {' '}
                  <div hidden={loading}>
                    <Styledtext>Price {FormatPrice} </Styledtext>{' '}
                  </div>{' '}
                  {loading ? (
                    <Spin
                      style={{ position: 'relative', bottom: 20, left: 10 }}
                      indicator={antIcon}
                      className="add-spinner"
                    />
                  ) : (
                    ''
                  )}
                </DarkCard>
                <DarkCard
                  style={{
                    maxWidth: 200,
                    maxHeight: 50,
                    position: 'relative',
                    left: 30,
                    paddingLeft: 75,
                    paddingTop: 50,
                    paddingRight: 75,
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                  }}
                >
                  <div hidden={loading}>
                    <Styledtext>Value {FormatInvestment} </Styledtext>{' '}
                  </div>{' '}
                  {loading ? (
                    <Spin
                      style={{ position: 'relative', bottom: 20, left: 10 }}
                      indicator={antIcon}
                      className="add-spinner"
                    />
                  ) : (
                    ''
                  )}
                </DarkCard>
              </div>
            </LightGreyCard>
          </div>
        </div>
      </div>
    </>
  )
}
