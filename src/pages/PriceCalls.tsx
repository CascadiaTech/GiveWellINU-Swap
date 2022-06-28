import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { LightGreyCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Metrics = () => {
  const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [EthReserves, setEthReserves] = useState(Number)
  const [JpegReserves, setJpegReserves] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  const [JpegPrice, setJpegPrice] = useState(Number)
  const [EthPrice, setEthPrice] = useState(Number)

  useEffect(() => {
    const provider = new Web3Provider(library.provider)
    async function FetchRawPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.price0CumulativeLast()
        const JpegPrice = await Price
        const DisplayJpegPrice = JpegPrice.toString()
        console.log(DisplayJpegPrice)
        return DisplayJpegPrice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchEthReserve() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Reserves = await contract.getReserves()
        const JpegReserveB = await Reserves.reserve1
        const DisplayEthReserves = JpegReserveB
        return DisplayEthReserves
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchJpegReserve() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Reserves = await contract.getReserves()
        const JpegReserveA = await Reserves.reserve0
        const DisplayJpegReserves = JpegReserveA
        console.log(DisplayJpegReserves)
        return DisplayJpegReserves
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchEthPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.etherscan.io/api?module=stats&action=ethprice &apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key

        const data = await response.json()
        const ethprice = data.ethusd
        const ethPrice = await ethprice
        const DisplayethPrice = ethPrice
        console.log(DisplayethPrice)
        return DisplayethPrice
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    FetchEthPrice().then((result) => setEthPrice(result))

    FetchEthReserve()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setEthReserves(result))

    FetchJpegReserve()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setJpegReserves(result))

    FetchRawPrice()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setJpegPrice(result))
  }, [account, showConnectAWallet, library.provider])

  const JpegPriceInUsd = JpegPrice / EthPrice
  const MarketCap = [(JpegPrice / EthPrice) * 10000000] // essentially jpegusd price divided by total supply
  const ReserveAinUsd = JpegReserves * JpegPriceInUsd
  const ReserveBinUsd = EthReserves * EthPrice
  const TotalLiquidity = ReserveAinUsd + ReserveBinUsd
  return (
    <LightGreyCard>
      MarketCap ${MarketCap}
      Jpeg Price ${JpegPriceInUsd}
      Total Liquidity {TotalLiquidity}
      {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
    </LightGreyCard>
  )
}
// for Liquidity it is getreserves a and B then convert A to number  and multiply that by the price of Jpegmorgan
// this will get the dollar value amount of jpeg in the pool
export default Metrics
