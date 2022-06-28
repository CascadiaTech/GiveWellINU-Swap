import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { GreyCard } from 'components/Card'
//import { RowBetween } from 'components/Row'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import React, { useCallback, useState } from 'react'
import styled from 'styled-components/macro'

import header from '../../assets/images/header.png'
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
const StyledImg = styled.img`
  justify-content: 'right';
  position: relative;
  margin-bottom: 34px;
`
// left: 600px
const DonateButton = styled.button`
  padding: 10px 4px;
  display: 'block';
  position: relative;
  font-color: #ffffff;
  left: 525px;
  bottom: 175px;
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
const HoverCard = styled(GreyCard)`
 transition: "all 2's" ;
 &:hover {
     background-color: #ff9d1c;
     color: black;
 
 `
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ClaimTransaction = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context
  const provider = new Web3Provider(library.provider)
  const signer = provider.getSigner()
  //const { addToken, success } = useAddTokenToMetamask(currencyToAdd)

  const handleDonate = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const response = await fetch(
        'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
      ) //ClientTokenABIneeded
      const data = await response.json()
      const abi = data.result
      console.log(abi)
      const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const DonateBalance = await contract.approve(account, 1) //.claim(account,amount)
      const Donatetxid = await DonateBalance
      return Donatetxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, account, signer])

  const handleClaim = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const response = await fetch(
        'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
      ) //ClientTokenABIneeded
      const data = await response.json()
      const abi = data.result
      console.log(abi)
      const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const ClaimBalance = await contract.approve(account, 1) //.claim(account,amount)
      const Claimtxid = await ClaimBalance

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, account, signer])

  if (scrollY > 20)
    // useLayoutEffect document.getElementById("GreyCard").style.transition = "all 2s";
    return (
      <>
        <HoverCard
          className="HoverCard"
          style={{
            transition: "all 2's",
            backgroundColor: '#f70000',
            fontSize: '12x',
            maxWidth: '800px',
            maxHeight: 200,
            marginBottom: '10px',
          }}
        >
          <StyledImg
            style={{ paddingBottom: 10, alignItems: 'left' }}
            src={header}
            height={200}
            width={400}
            alt="eader"
          ></StyledImg>
          <DonateButton style={{ display: 'block' }} onClick={handleDonate}>
            Donate to Charity
          </DonateButton>
          <ClaimButton color="secondary" disabled={!account || loading} onClick={handleClaim}>
            {loading ? <Spin indicator={antIcon} className="add-spinner" /> : 'Claim'}
          </ClaimButton>
        </HoverCard>
      </>
    )
  else {
    return <></>
  }
}

export default ClaimTransaction
