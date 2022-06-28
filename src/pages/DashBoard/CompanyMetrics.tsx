//import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
//import { Spin } from 'antd'
import { DarkCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro'

import Metrics from '../PriceCalls'
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ClaimButton = styled.button`
  position: relative;
  display: 'block';
  right: 45px;
  left: 527px;
  text-color: #ffffff;
  bottom: 155px;
  padding: 10px 40px;
  border-radius: 25px;
  background-image: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 148, 0) 70%, rgb(255, 253, 43) 100%);
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
  transition: border-color 0.5s ease-out;
  &:hover {
      background-color: #ff9d1c;
      color: black;
`

const StyledText = styled.text`
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 18px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  font-weight: bold;
  left: 1px;
  display: block;
  top: 25px;
`

const StyledText2 = styled.text`
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 18px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  font-weight: bold;
  display: block;
  top: 25px;
`

const StyledText4 = styled.text`
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 18px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  left: 5px;
  font-weight: bold;
`
const StyledText5 = styled.text`
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 18px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  left: 100px;
  font-weight: bold;
`
const CompanyMetrics = () => {
  //const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  // const [claimableBalance, setclaimableBalance] = useState(Number)
  const [projectTotal, setprojecttotal] = useState(Number)
  const [PastClaims, setPastClaims] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  const test = useRef(document.createElement('DarkCard'))

  useEffect(() => {
    async function FetchPastClaims() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a'
        const contract = new Contract(contractaddress, abi, provider)
        const UserPastClaimBalance = await contract.balanceOf(account)

        const PastClaims = await UserPastClaimBalance.toString()
        return PastClaims
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchProjectTotal() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a'
        const contract = new Contract(contractaddress, abi, provider)
        const ProjectTotal = await contract.balanceOf(account)
        const projecttotal = await ProjectTotal.toString()
        return projecttotal
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    FetchPastClaims()
      .then((result) => formatEther(result))
      .then((result) => parseInt(result))
      .then((result) => setPastClaims(result))

    FetchProjectTotal()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(2))
      .then((result) => setprojecttotal(result))
  }, [account, showConnectAWallet, library.provider])

  return (
    <>
      <Metrics></Metrics>
      <DarkCard
        className="DarkCard"
        ref={test}
        style={{
          textAlign: 'left',
          maxWidth: '800px',
        }}
      >
        {' '}
        <StyledText4 style={{ alignItems: 'center' }}>
          {' '}
          Total Rewards Claimed {''} {projectTotal}{' '}
        </StyledText4>
        <StyledText5 style={{ justifyContent: 'right', textAlign: 'center', paddingLeft: 50 }}>
          You have Earned in total ${PastClaims * 1.4}
        </StyledText5>
      </DarkCard>
    </>
  )
}
export default CompanyMetrics
//for sending a swap transaction that first send a fee to a company wallet you would
// do a button that on click runns that function that
//reads the amount of the transaction and makes a raw transactionthat sends bnb or eth to another wallet
// htne executes the other transaction, signed once
