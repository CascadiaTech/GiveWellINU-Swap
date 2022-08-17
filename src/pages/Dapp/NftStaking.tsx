import '../DashBoard/styles.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider, Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
//import { formatEther } from '@ethersproject/units'
import useScrollPosition from '@react-hook/window-scroll'
//import WalletConnectProvider from '@walletconnect/web3-provider'
import { useWeb3React } from '@web3-react/core'
import mintinggif from 'assets/mintinggif.mp4'
import React, { useCallback, useEffect, useState } from 'react'

import { NFTAbiObject } from './NFTAbi'
import { NFTStakingAbiObject } from './NFTStakingAbi'
//import useWeb3React from 'hooks/useActiveWeb3React'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const NFTStakingSection = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  const [StakedNFT, setNFTSStaked] = useState<any[]>([])
  const [NFTrewards, setNFTrewards] = useState(String)
  const [Approved, setApproved] = useState(Boolean)
  const [UnstakeNFTID, setUnstakeNFTIDs] = useState<any[]>([])
  //const [NFTData, setNFTData] = useState<string[]>([])
  const [NFTData, setNFTData] = useState<any[]>([])
  const [NFTArray, setNFTArray] = useState<any[]>([])
  const [StakeNFTID, setNFTID] = useState<any[]>([])
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const context = useWeb3React()
  const { library } = context
  //const { library } = context
  const showConnectAWallet = Boolean(!account)
  // const context = useWeb3React()
  //const { library } = context
  const StakingContract = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a'
  useEffect(() => {
    async function FetchNFTData() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }
      try {
        //setLoading(true)
        //const Account =
        const response = fetch('https://api.studio.thegraph.com/query/22579/test/v0.0.1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            query: `{
              account(id: "${account}") {
                ERC721tokens {
                  identifier
                }
              }
            }`,
          }),
        })
        const NFTdata = (await response).json()
        const step1 = JSON.stringify(await NFTdata)
        const step2 = JSON.parse(await step1)
        const NFTids = await step2?.data?.account?.ERC721tokens
        if (!NFTids) {
          return console.log('noids')
        } else {
          const test = Array.from(NFTids)
          setNFTData(test)
          return NFTids
        }
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success')
      }
    }
    async function FetchNFTInStakingPool() {
      try {
        const data = NFTStakingAbiObject
        const abi = data
        console.log(data)
        const provider = getDefaultProvider()
        //const signer = provider.getSigner()
        const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
        const contract = new Contract(contractaddress, abi, provider)
        //const options = { value: parseEther('0.075') }
        if (!account) {
          return console.log('noaccountforstakingcall')
        } else {
          const Stakednft = await contract.userStakedNFT(account) //.claim()
          const stakedNFT = await Stakednft
          const final = stakedNFT.map((a: { _hex: any }) => a._hex)
          setNFTSStaked(final)
          return final
        }
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success')
      }
    }

    async function FetchRewardsInStakingPool() {
      try {
        const data = NFTStakingAbiObject
        const abi = data
        console.log(data)
        const provider = getDefaultProvider()
        //const signer = provider.getSigner()
        const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
        const contract = new Contract(contractaddress, abi, provider)
        //const options = { value: parseEther('0.075') }
        if (!account) {
          return console.log('noaccountforrewardscall')
        } else {
          const Stakednft = await contract.userInfo(account) //.claim()
          const final = await Stakednft.rewards
          const finalresult = formatEther(final)
          setNFTrewards(finalresult)
          return final
        }
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success')
      }
    }

    async function FetchApproved() {
      try {
        const data = NFTAbiObject
        const abi = data
        console.log(data)
        const provider = getDefaultProvider()
        //const signer = provider.getSigner()
        const contractaddress = '0xC4deaEbD15E3B6956cc7EF48d2AB934CA3CaB4D2'
        const Stakingcontractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
        const contract = new Contract(contractaddress, abi, provider)
        //const options = { value: parseEther('0.075') }
        if (!account) {
          return console.log('noaccountforrewardscall')
        } else {
          const Stakednft = await contract.isApprovedForAll(account, Stakingcontractaddress) //.claim()
          const final = await Stakednft
          setApproved(final)
          console.log(Approved)
          return final
        }
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success')
      }
    }

    FetchNFTData()
    //.then((result) => Array.from(result))
    //.then((result) => setNFTData(result))
    FetchApproved()
    FetchNFTInStakingPool()
    FetchRewardsInStakingPool()
    //.then((result) => Array.from(result))
    //.then((result) => setNFTSStaked(result))
  }, [account])
  const handleHarvest = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTStakingAbiObject
      const abi = data
      console.log(data)
      //const provider = new WalletConnectProvider({
      //  infuraId: '7724cb4383a249dfb4a847c90954b901', // Required
      //})
      //await provider.enable()
      const providerBig = new Web3Provider(library?.provider)
      console.log(providerBig)
      //providerBig.enable()
      const signer = providerBig.getSigner()
      console.log(signer)
      const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      console.log(contract)
      //const options = { value: parseEther('0.075') }
      const harvest = await contract.harvest() //.claim()
      const test = await signer.signTransaction(harvest)
      console.log(test)
      const Claimtxid = await test

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [account, showConnectAWallet])

  const handleApprove = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTAbiObject
      const abi = data
      console.log(data)
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
      const contractaddress = '0xC4deaEbD15E3B6956cc7EF48d2AB934CA3CaB4D2'
      const Stakingcontractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      //const BIGINT = 100000000000000000
      const approve = await contract.setApprovalForAll(Stakingcontractaddress, true) //.claim()
      const Claimtxid = await approve

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleNftStake = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTStakingAbiObject
      const abi = data
      const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const options = StakeNFTID
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
  const handleNftUnstake = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      //setLoading(true)
      const data = NFTStakingAbiObject
      const abi = data
      const contractaddress = '0xBe06a5B6264Bb8f2677E3C24522c3EC5f3eC462a' // "clienttokenaddress"
      const provider = new Web3Provider(library.provider)
      const signer = provider.getSigner()
      const contract = new Contract(contractaddress, abi, signer)
      //const options = { value: parseEther('0.075') }
      const options = UnstakeNFTID
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

  //const unstakearray = Array.from(JSON.stringify(stakedNFT))
  //const finalresult = test.map(({ _hex: any }) => _hex)

  function HandleClick(e: any) {
    if (StakeNFTID.includes(e)) {
      const filteredArray = StakeNFTID.filter((identifier) => identifier !== e)
      setNFTID(filteredArray)
    } else {
      setNFTID((StakeNFTID) => [...StakeNFTID, e])
      //const Container = document.getElementById('flexbox-vertical-container')
      const current = document.getElementsByClassName('listItems')
      current[0].className = current[0].className + 'active'
    }
  }

  function HandleUnstakeClick(e: any) {
    if (UnstakeNFTID.includes(e)) {
      const filteredArray = UnstakeNFTID.filter((_hex) => _hex !== e)
      setUnstakeNFTIDs(filteredArray)
    } else {
      setUnstakeNFTIDs((UnstakeNFTID) => [...UnstakeNFTID, e])
      //const Container = document.getElementById('flexbox-vertical-container')
    }
  }

  const listItems = NFTData ? (
    NFTData.map(function (d: any, idx: any) {
      return (
        <ul
          className={'listItems'}
          style={{ cursor: 'pointer', display: 'inline-block', flexDirection: 'row' }}
          onClick={(e) => HandleClick(d.identifier)}
          key={idx}
        >
          {d.identifier}
        </ul>
      )
    })
  ) : (
    <></>
  )

  const arrOfNum = StakedNFT ? (
    StakedNFT.map((_hex) => {
      return (
        <ul
          className={'listItemsunstake'}
          style={{ cursor: 'pointer', display: 'inline-block', flexDirection: 'row' }}
          onClick={(e) => HandleUnstakeClick(_hex)}
          key={_hex}
        >
          {Number(_hex)}
        </ul>
      )
    })
  ) : (
    <></>
  )

  const fuckarray = UnstakeNFTID.map(myFunction)
  function myFunction(_hex: any) {
    return Number(_hex)
  }
  return (
    <>
      <div className={'flexbox-container'}>
        <div className={'flexbox-vertical-container'}>
          <h1 style={{ fontFamily: 'montserrat, sans-serif', color: '#000000' }}> NFT Staking </h1>
          <div className={'NFT-claim-card'}>
            <div style={{ justifyContent: 'space-between' }} className={'flexbox-container'}>
              <p
                className={'NFTmintingstationtext'}
                style={{ paddingLeft: '3vw', paddingTop: '3vh', fontFamily: 'montserrat, sans-serif' }}
              >
                {' '}
                Rewards {NFTrewards ? <>{NFTrewards}</> : <></>}
              </p>
              <p>
                <button
                  style={{ width: '10vw', minWidth: '100px', color: '#ffffff', marginTop: '2vh', marginRight: '3vw' }}
                  className={'StakeButton'}
                  onClick={() => handleHarvest()}
                >
                  {' '}
                  Claims
                </button>
              </p>
            </div>
          </div>
          <div className={'NFT-card'}>
            <h1 style={{ fontFamily: 'montserrat, sans-serif', color: '#000000' }}> Stake NFT</h1>
            <div className={'flexbox-container-nft'}>
              <div className={'flexbox-vertical-container'} style={{ justifyContent: 'center' }}>
                {NFTData ? <p className={'Animeverseblackheadertext'}> Holding {NFTData.length}</p> : <></>}

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    minWidth: '300px',
                    maxWidth: '350px',
                    height: 'auto',
                    borderRadius: '10px',
                    border: 'solid',
                    marginBottom: '2vh',
                  }}
                >
                  <source src={mintinggif} type="video/mp4" />
                </video>
              </div>
              <div className={'flexbox-vertical-container'}>
                <p
                  style={{
                    justifyContent: 'center',
                    color: '#000000',
                    width: '300px',
                    minWidth: '300px',
                    textAlign: 'center',
                    fontFamily: 'montserrat, sans-serif',
                    marginBottom: '5px',
                  }}
                >
                  <p
                    style={{
                      justifyContent: 'center',
                      color: '#000000',
                      width: '300px',
                      minWidth: '300px',
                      textAlign: 'center',
                      fontFamily: 'montserrat, sans-serif',
                      marginBottom: '5px',
                    }}
                    className={'Animeverseblackheadertext'}
                  >
                    Select Which NFT You Want To Stake
                  </p>
                  {showConnectAWallet ? (
                    <div style={{ fontFamily: 'montserrat, sans-serif', marginBottom: '5px' }}>
                      {' '}
                      Connect Your Wallet to View Your TokenIds
                    </div>
                  ) : (
                    <>
                      {' '}
                      {NFTData.length > 0 ? (
                        <div style={{ maxWidth: '305px' }} className={'NFT-text-card'}>
                          <ul style={{ justifyContent: 'left', textAlign: 'left', marginRight: '3vw' }}>{listItems}</ul>
                        </div>
                      ) : (
                        <div style={{ fontFamily: 'montserrat, sans-serif', marginBottom: '5px' }}>
                          {' '}
                          You dont own any NFTs
                        </div>
                      )}
                    </>
                  )}
                </p>
              </div>
              {StakeNFTID ? (
                <div
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                  className={'flexbox-vertical-container'}
                >
                  {Approved ? (
                    <button
                      style={{ color: '#ffffff', width: '20vw', minWidth: '100px' }}
                      className={'StakeButton'}
                      onClick={() => handleNftStake()}
                    >
                      Stake{' '}
                    </button>
                  ) : (
                    <button
                      style={{ color: '#ffffff', width: '20vw', minWidth: '100px' }}
                      className={'StakeButton'}
                      onClick={() => handleApprove()}
                    >
                      Approve{' '}
                    </button>
                  )}

                  <div style={{ marginLeft: '1vw', marginBottom: '2vh', fontFamily: 'montserrat, sans-serif' }}>
                    I Want to Stake TokenID : {StakeNFTID.join(',')}
                  </div>
                </div>
              ) : (
                <div style={{ fontFamily: 'montserrat, sans-serif' }}> Select a TokenID to Stake</div>
              )}
            </div>
          </div>
          <p style={{ marginTop: '2vh', marginBottom: '2vh' }}></p>
          <div className={'NFT-card'}>
            <h1 style={{ color: 'black', fontFamily: 'montserrat, sans-serif' }}> Unstake NFT</h1>
            <div className={'flexbox-container-nft'}>
              <div className={'flexbox-vertical-container'} style={{ justifyContent: 'center' }}>
                {StakedNFT ? <p className={'Animeverseblackheadertext'}> Staked {StakedNFT.length}</p> : <></>}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    minWidth: '300px',
                    maxWidth: '350px',
                    height: 'auto',
                    borderRadius: '10px',
                    border: 'solid',
                    marginBottom: '2vh',
                  }}
                >
                  <source src={mintinggif} type="video/mp4" />
                </video>
              </div>
              <div className={'flexbox-container-nft'} style={{ width: 'fit-content', justifyContent: 'center' }}>
                <p
                  className={'Animeverseblackheadertext'}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#000000',
                    textAlign: 'center',
                    fontFamily: 'montserrat, sans-serif',
                    marginBottom: '5px',
                  }}
                >
                  Select Which NFT You Want To UnStake
                </p>
                {showConnectAWallet ? (
                  <div style={{ fontFamily: 'montserrat, sans-serif' }}> Connect Your Wallet to View Your TokenIds</div>
                ) : (
                  <>
                    {StakedNFT.length > 1 ? (
                      <div style={{ maxWidth: '305px' }} className={'NFT-text-card'}>
                        <p style={{ marginRight: '3px' }}>{arrOfNum}</p>
                      </div>
                    ) : (
                      <div style={{ fontFamily: 'montserrat, sans-serif', marginBottom: '5px' }}>
                        {' '}
                        You dont have any NFTs Staked
                      </div>
                    )}
                  </>
                )}

                {UnstakeNFTID ? (
                  <div
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                    className={'flexbox-vertical-container'}
                  >
                    <button
                      style={{ color: '#ffffff', width: '20vw', minWidth: '100px' }}
                      className={'StakeButton'}
                      onClick={() => handleNftUnstake()}
                    >
                      UnStake{' '}
                    </button>
                    <div style={{ marginLeft: '1vw' }}>
                      <p style={{ fontFamily: 'montserrat, sans-serif' }} className={'Animestyledtext'}>
                        I Want to UnStake TokenID : {fuckarray.join(',')}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div style={{ fontFamily: 'montserrat, sans-serif' }}> Select a TokenID to UnStake</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFTStakingSection

//{NFTData ? (
// <ul>
//   {results.map((item) => (
//    <li onClick={() => SetstakeNFTID(item)} key={item}>
//      {item}
//    </li>
//   ))}
//  </ul>
// ) : (
// <></>
//)}
