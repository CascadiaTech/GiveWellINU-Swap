import { LoadingOutlined } from '@ant-design/icons'
//import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider, getNetwork } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
//import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Spin } from 'antd'
import { GreyCard } from 'components/Card'
//import Decimal from 'decimal.js'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import { String } from 'typescript-string-operations'

//import Contract from './artifacts/contracts/Greeter.sol/Greeter.json'
//const ethers = require('ethers')

const useStyles = makeStyles({
  swapbutton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
  },
})

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const UserBalance = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const { account, chainId } = useActiveWeb3React()
  //here I am unsure If I just use the chainid read from the wallet if that will suffice for a provider, I believe so
  const showConnectAWallet = Boolean(!account)
  const [userBalance, setuserBalance] = useState(String)

  useEffect(() => {
    async function FetchBalance() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const chainInfo = 1
        const network = getNetwork(chainInfo)
        const provider = getDefaultProvider(network)
        const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a'
        const contract = new Contract(contractaddress, abi, provider)
        const UserTokenBalance = await contract.balanceOf(account)
        const test = UserTokenBalance
        const test0 = UserTokenBalance.toString()
        console.log(test)
        return test0
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    FetchBalance()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(4))
      .then((result) => setuserBalance(result))
  }, [account, showConnectAWallet])

  return (
    <GreyCard>
      Your Token Balance {userBalance}
      {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
    </GreyCard>
  )
}

export default UserBalance
//for sending a swap transaction that first send a fee to a company wallet you would
// do a button that on click runns that function that
//reads the amount of the transaction and makes a raw transactionthat sends bnb or eth to another wallet
// htne executes the other transaction, signed once
