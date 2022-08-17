import '../DashBoard/styles.css'

import { BigNumber } from '@ethersproject/bignumber'
//import { checkNftOwnership, getNftsForOwner, initializeAlchemy, Network } from '@alch/alchemy-sdk'
//import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider, Web3Provider } from '@ethersproject/providers'
// { formatEther } from '@ethersproject/units'
//import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import ANime from 'assets/ANime.png'
import ApeMotorcycleLogo from 'assets/images/ApeMotorcycleLogo.png'
import { PurpleCard } from 'components/Card'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import React, { useCallback, useEffect, useState } from 'react'

import { abiObject } from './abi'
import { NFTAbiObject } from './NFTAbi'
import NFTMintSection from './NFTMint'

const ClaimTransaction = () => {
  //const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context
  const [names, setname] = useState(String)
  const [emails, setemail] = useState(String)
  const [ishidden, setishidden] = useState(Boolean)
  const [connected, setnotconnected] = useState(Boolean)
  const [holders, setholders] = useState(Number)
  const [price, setprice] = useState(String)
  const [nft, setnft] = useState(String)
  const [unpaidearnings, setunpaidearnings] = useState(String)
  const [userbalance, setuserbalance] = useState(Number)
  const [marketcap, setmarketcap] = useState(String)
  const [liq, setliq] = useState(String)
  function toggleHidden() {
    setishidden(!ishidden)
  }
  useEffect(() => {
    async function FetchHolders() {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getTokenInfo/0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67?apiKey=EK-pHhzD-K23vfE9-d9bYq'
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

    async function FetchDexGuruPrice() {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.dev.dex.guru/v1/chain/1/tokens/0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67/market/?api-key=0VQUJ1cmVs0-n0pj_OhrzjCPO1NDKDGzpAuh7OTQZuI'
        )
        const data = await response.json()
        const returnprice = await data.price_usd
        const stringprice = JSON.stringify(returnprice)
        return stringprice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchDexGuruLiq() {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.dev.dex.guru/v1/chain/1/tokens/0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67/market/?api-key=0VQUJ1cmVs0-n0pj_OhrzjCPO1NDKDGzpAuh7OTQZuI'
        )
        const data = await response.json()
        const returnliq = await data.liquidity_usd
        return returnliq
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    async function Marketcap() {
      try {
        setLoading(true)
        const AnimeMarketcap = (await Number(price)) * 1000000000000
        const displaymarketcap = JSON.stringify(AnimeMarketcap)
        return setmarketcap(displaymarketcap)
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    FetchDexGuruPrice()
      .then((result) => Number(result).toFixed(12))
      .then((result) => setprice(result))
    FetchDexGuruLiq()
      .then((result) => Number(result).toFixed(2))
      .then((result) => setliq(result))
    Marketcap()
    FetchHolders().then((result) => setholders(result))
  }, [price, holders])

  useEffect(() => {
    async function FetchNFT() {
      if (showConnectAWallet) {
        setnotconnected(true)
        return
      }

      try {
        //setLoading(true)
        const provider = getDefaultProvider()
        const abi = NFTAbiObject
        const contractaddress = '0xC4deaEbD15E3B6956cc7EF48d2AB934CA3CaB4D2'
        const contract = new Contract(contractaddress, abi, provider)
        const UserTokenBalance = await contract.balanceOf(account)
        const FinalResult = await UserTokenBalance.toString()
        return FinalResult
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchBalance() {
      if (showConnectAWallet) {
        setnotconnected(true)
        return
      }

      try {
        //setLoading(true)
        const provider = getDefaultProvider()
        const abi = abiObject
        const contractaddress = '0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67'
        const contract = new Contract(contractaddress, abi, provider)
        //const FinalResult = await UserTokenBalance.toString()
        if (!account) {
          return console.log('noaccountforBalancecall')
        } else {
          const UserTokenBalance = await contract.balanceOf(account)
          const test = await UserTokenBalance
          const test0 = test.toString()
          const the = BigNumber.from(test)
          const fucke = Number(the)
          setuserbalance(fucke)
          return test
        }
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchUnpaidBalance() {
      if (showConnectAWallet) {
        setnotconnected(true)
        return
      }

      try {
        //setLoading(true)
        const provider = getDefaultProvider()
        const abi = abiObject
        const contractaddress = '0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67'
        const contract = new Contract(contractaddress, abi, provider)
        const UserUnpaidBalance = await contract.getUserUnpaidEarnings(account)
        const FinalResult = await Number(UserUnpaidBalance)
        const fuck = FinalResult.toString()
        console.log(FinalResult)
        return fuck
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    FetchBalance()
    FetchNFT().then((result) => setnft(result))
    FetchUnpaidBalance()
      //.then((result) => formatEther(result))
      .then((result) => setunpaidearnings(result as string))
      .then((result) => console.log(result))
  }, [account, showConnectAWallet])

  async function Postacc() {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }
    try {
      const response = fetch('https://goc0xambi2.execute-api.us-east-2.amazonaws.com/postuserinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: account,
          name: names,
          email: emails,
        }),
      })
      const data = (await response).json()
      //const data = rawdata
      return data
    } catch (error) {
      console.log(error)
    } finally {
      console.log('success')
    }
  }

  function formatMoney(n: any) {
    return '$ ' + (Math.round(n * 100) / 100).toLocaleString()
  }
  function numberWithCommas(num: any) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  function insertDecimal(num: any) {
    return Number((num / 1000000000).toFixed(2))
  }
  console.log(insertDecimal(userbalance))
  const test2 = insertDecimal(userbalance)
  const test3 = numberWithCommas(test2)
  console.log(test3)

  //function formateth(str: string) {
  //  return formatEther(userunpaidearnings)
  //}
  //const n = numberWithCommas(Totalliquidity)
  const handleClaim = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const abi = abiObject
      const provider = getDefaultProvider()
      //const signingprovider2 = new InfuraProvider('mainnet', '7724cb4383a249dfb4a847c90954b901')
      //const test = new WallectConnectProvider({})
      const signingprovider = new Web3Provider(library.provider)
      const signer = signingprovider.getSigner()
      const contractaddress = '0x5a8F92addfe1Cd48B51E1FA926144C0918DBAb67' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const ClaimBalance = await contract.giveMeWelfarePlease() //.claim(account,amount)
      const Claimtxid = await ClaimBalance

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet])

  return (
    <div className={'flexbox-vertical-container'}>
      <img className={'dapp-header-image'} src={ApeMotorcycleLogo} alt="header"></img>
      <div className={'flexbox-container'}>
        <p style={{ paddingTop: '5vh', marginTop: '5vh', marginBottom: '5vh' }}></p>
        <div className="flexbox-container" style={{ justifyContent: 'center' }}>
          <div>
            <button onClick={toggleHidden} className={'GitButton-inactive'}>
              Create an account
            </button>
            {!ishidden && (
              <PurpleCard>
                <label htmlFor="fname">First Name</label>
                <input
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                ></input>

                <label htmlFor="fname">Email Address</label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="text"
                  id="fname"
                  name="Email"
                  placeholder="someone@somewhere.com"
                ></input>
                {!names && !emails && <button> no submit</button>}
                {names && emails && account && <input onClick={() => Postacc()} type="submit" value="Submit" />}
              </PurpleCard>
            )}
          </div>
        </div>
        <button onClick={toggleHidden} className={'QuoteButton'}>
          Contact us for a Quote
        </button>
      </div>
      <div className={'centeronmobile'}>
        <div style={{ justifyContent: 'center' }} className={'flexbox-container'}>
          <div id="DashBoard">
            <NFTMintSection></NFTMintSection>
            <img className={'animedapp'} src={ANime} alt="headerss"></img>
            <div
              style={{ fontFamily: 'montserrat, sans-serif', color: '#000000', fontWeight: 700 }}
              className={'Dapp-card'}
            >
              <div>
                {' '}
                <p style={{ textAlign: 'center', fontFamily: 'montserrat, sans-serif' }}>Company Statistics</p>{' '}
              </div>{' '}
              <div className={'flexbox-vertical-container'}>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '4px', fontFamily: 'montserrat, sans-serif' }}>Current Price</p>
                  <p style={{ marginRight: '4px', fontFamily: 'montserrat, sans-serif' }}> {price} </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '4px', fontFamily: 'montserrat, sans-serif' }}>Market Capitalization</p>
                  <p style={{ marginRight: '4px', fontFamily: 'montserrat, sans-serif' }}>
                    {formatMoney(Number(marketcap))}
                  </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '4px', fontFamily: 'montserrat, sans-serif' }}>Holders</p>
                  <p
                    style={{
                      fontFamily: 'montserrat, sans-serif',
                      alignSelf: 'right',
                      textAlign: 'right',
                      marginRight: '4px',
                    }}
                  >
                    {holders}
                  </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '4px', fontFamily: 'montserrat, sans-serif' }}>Total Liquidity</p>
                  <p style={{ marginRight: '4px', fontFamily: 'montserrat, sans-serif' }}>
                    {' '}
                    {formatMoney(Number(liq))}
                  </p>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '2vh', marginBottom: '2vh' }}></p>
            <div style={{ fontWeight: 700 }} className={'Dapp-card'}>
              <div className={'flexbox-vertical-container'}>
                <p style={{ textAlign: 'center', fontFamily: 'montserrat, sans-serif' }}> User Statistics</p>{' '}
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '4px', fontFamily: 'montserrat, sans-serif' }}>User Anime Token Balance</p>
                  <p style={{ marginRight: '4px', fontFamily: 'montserrat, sans-serif' }}>
                    {showConnectAWallet ? <> Connect Your Wallet to view your balance.</> : <>{test3}</>}
                  </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between', fontWeight: 700 }}>
                  <p style={{ paddingLeft: '4px', fontFamily: 'montserrat, sans-serif' }}>Your NFT Balance</p>
                  <p style={{ justifySelf: 'right', marginRight: '4px', fontFamily: 'montserrat, sans-serif' }}>
                    {nft}
                  </p>
                </div>
                <div className={'flexbox-container'} style={{ justifyContent: 'space-between' }}>
                  <p style={{ paddingLeft: '4px', fontFamily: 'montserrat, sans-serif' }}>Your Pending Reflections</p>
                  <p style={{ justifySelf: 'right', marginRight: '4px', fontFamily: 'montserrat, sans-serif' }}>
                    {showConnectAWallet ? <></> : <>{test2}</>}
                  </p>
                </div>
                <button
                  className={'ClaimButton'}
                  onClick={() => handleClaim()}
                  style={{
                    color: '#ffffff',
                    justifyContent: 'center',
                    fontFamily: 'montserrat, sans-serif',
                  }}
                >
                  {' '}
                  Claim Reflections{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClaimTransaction
