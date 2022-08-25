import '../DashBoard/styles.css'

import { BigNumber } from '@ethersproject/bignumber'
//import { checkNftOwnership, getNftsForOwner, initializeAlchemy, Network } from '@alch/alchemy-sdk'
//import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider, Web3Provider } from '@ethersproject/providers'
// { formatEther } from '@ethersproject/units'
//import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import ApeMotorcycleLogo from 'assets/images/ApeMotorcycleLogo.png'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import React, { useCallback, useEffect, useState } from 'react'

import { abiObject } from './abi'
import FAQPage from './FAQ'
import FooterMenu from './Footer'
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

    //FetchDexGuruPrice()
    //.then((result) => Number(result).toFixed(12))
    // .then((result) => setprice(result))
    //FetchDexGuruLiq()
    // .then((result) => Number(result).toFixed(2))
    // .then((result) => setliq(result))
    //Marketcap()
    //FetchHolders().then((result) => setholders(result))
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
    <div style={{ justifyContent: 'space-between', alignItems: 'center' }} className={'flexbox-vertical-container'}>
      <img className={'dapp-header-image'} src={ApeMotorcycleLogo} alt="header"></img>
      <div style={{ marginTop: '3vh' }} className="flexbox-vertical-container">
        <div className="flexbox-container" style={{ justifyContent: 'center' }}>
          <div className={'Newheader-flexbox-container'}>
            <div className="flexbox-container" style={{ justifyContent: 'center' }}>
              <button
                style={{ fontFamily: 'default', marginLeft: '3vw' }}
                onClick={() => window.open('https://app.uniswap.org/')}
                className={'HeaderButton'}
              >
                Buy
              </button>

              <button onClick={() => window.open('https://opensea.io/')} className={'HeaderButton'}>
                OpeanSea
              </button>
            </div>
            <button
              onClick={() => window.open('https://apemotorcycleclub.com')}
              style={{ fontFamily: 'default' }}
              className={'Dashboard-Button'}
            >
              <p
                style={{
                  textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                  justifyContent: 'center',
                  fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                  textDecoration: 'none',
                  marginTop: '0.25vh',
                  color: '#ffffff',
                  paddingTop: '2px',
                  transform: 'translate(0%, -10%)',
                  fontFamily: 'default',
                  fontWeight: 600,
                  transition: '1s',
                }}
              >
                Website
              </p>
            </button>
          </div>
        </div>
      </div>
      <div style={{ justifyContent: 'center' }} className={'flexbox-container'}>
        <div id="DashBoard">
          <div>
            <button onClick={toggleHidden} className={'createaccount'}>
              Create an account
            </button>
            <p style={{ paddingTop: '2vh', marginTop: '2vh', marginBottom: '2vh' }}></p>
            {!ishidden && (
              <div className={'CreateAccount-Card'}>
                <label style={{ color: '#ffffff', fontFamily: 'Rye, cursive' }} htmlFor="fname">
                  First Name
                </label>
                <input
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                ></input>
                <label style={{ color: '#ffffff', fontFamily: 'Rye, cursive' }} htmlFor="fname">
                  Email Address
                </label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="text"
                  id="fname"
                  name="Email"
                  placeholder="someone@somewhere.com"
                ></input>
                <div className={'flexbox-vertical-container'} style={{ justifyContent: 'center' }}>
                  {!names && !emails && (
                    <button style={{ alignSelf: 'center' }} className={'Account-Form-button'}>
                      {' '}
                      Cant Submit Yet, Connect your wallet, and fill in the form fields
                    </button>
                  )}
                  {names && emails && account && (
                    <input
                      style={{ fontFamily: 'Rye, cursive' }}
                      className={'Form-button-input'}
                      onClick={() => Postacc()}
                      type="submit"
                      value="Submit"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <p style={{ marginTop: '10%' }}></p>
      <NFTMintSection></NFTMintSection>
      <FAQPage></FAQPage>
      <FooterMenu></FooterMenu>
    </div>
  )
}

export default ClaimTransaction
