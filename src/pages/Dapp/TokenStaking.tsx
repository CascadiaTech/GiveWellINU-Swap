import '../DashBoard/styles.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import React, { useCallback, useState } from 'react'

import { StakingAbiObject } from './StakingAbi'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const TokenStakingSection = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  const [stakepool30, setstakepool30] = useState(Boolean)
  const [stakepool15, setstakepool15] = useState(Boolean)
  const [stakeamount, setstakeamount] = useState(String)
  const [unstakeamount, setunstakeamount] = useState(String)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context

  const handleHarvest = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = StakingAbiObject
      const abi = data
      console.log(data)
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
      const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const harvest = await contract.harvest() //.claim()
      const Claimtxid = await harvest

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleAnimeStake = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = StakingAbiObject
      const abi = data
      const contractaddress = '0xd28Fd547Acd4B299C3dE0fF248d751c8b94E66A5' // "clienttokenaddress"
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const options = stakeamount
      const unstakeNfts = await contract.stake(options) //.claim()
      const Claimtxid = await unstakeNfts

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])
  const handleUnstake = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = StakingAbiObject
      const abi = data
      const contractaddress = '0xd28Fd547Acd4B299C3dE0fF248d751c8b94E66A5' // "clienttokenaddress"
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const options = unstakeamount
      const unstakeNfts = await contract.unstake(options) //.claim()
      const Claimtxid = await unstakeNfts

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <>
      <div className={'flexbox-container'}>
        <div className={'flexbox-vertical-container'}>
          <h1> Animeverse Staking </h1>
          <div className={'NFT-card'} style={{ marginRight: '10vw' }}>
            <h1> Stake </h1>
            <div className={'flexbox-container'}>
              <button className={'GitButton'} onClick={() => setstakepool30((prevstakepool30) => !prevstakepool30)}>
                {' '}
                30 day stake
              </button>
              <button className={'GitButton'} onClick={() => setstakepool15((prevstakepool15) => !prevstakepool15)}>
                {' '}
                15 day stake{' '}
              </button>
            </div>
            <input
              style={{ width: '30vw', height: '8vh', borderRadius: '12px' }}
              onChange={(e) => setstakeamount(e.target.value)}
              type="text"
              id="fname"
              name="stake"
              placeholder="how many tokens do you want to stake?"
            ></input>
            {(stakeamount && stakepool30) || (stakeamount && stakepool15) ? (
              <button
                style={{ color: '#000000', width: '10vw' }}
                className={'GitButton'}
                onClick={() => handleAnimeStake}
              >
                {' '}
                Stake
              </button>
            ) : (
              <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                <p style={{ color: '#000000', width: '20vw', textAlign: 'center', fontFamily: 'OpenDyslexic3' }}>
                  Enter the amount you want to stake
                </p>
              </div>
            )}
            {stakepool30 && !stakepool15 ? <p> you are staking for 30 days </p> : <></>}
            {stakepool15 && !stakepool30 ? <p> You are staking for 15 days </p> : <></>}
            <div>
              {stakepool30 && !stakepool15 ? <p> you are staking for 30 days </p> : <></>}
              {stakepool15 && !stakepool30 ? <p> You are staking for 15 days </p> : <></>}
              {stakepool15 && stakepool30 ? (
                <p> Please select either the 15 day staking period, or the 30 day period </p>
              ) : (
                <></>
              )}
            </div>
            <h1> Unstake</h1>
            <input
              style={{ width: '30vw', height: '8vh', borderRadius: '12px' }}
              onChange={(e) => setunstakeamount(e.target.value)}
              type="text"
              id="fname"
              name="unstake"
              placeholder="How many tokens do you want to unstake?"
            ></input>
            {unstakeamount ? (
              <button
                style={{ color: '#000000', width: '10vw' }}
                className={'GitButton'}
                onClick={() => handleUnstake()}
              >
                {' '}
                Unstake
              </button>
            ) : (
              <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                <p style={{ color: '#000000', width: '20vw', textAlign: 'center', fontFamily: 'OpenDyslexic3' }}>
                  Enter the amount you want to unstake
                </p>
              </div>
            )}
            <button className={'GitButton'}> Harvest </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TokenStakingSection
