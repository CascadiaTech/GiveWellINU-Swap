import '../DashBoard/styles.css'

import { BigNumber } from '@ethersproject/bignumber'
//import { checkNftOwnership, getNftsForOwner, initializeAlchemy, Network } from '@alch/alchemy-sdk'
//import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider } from '@ethersproject/providers'
// { formatEther } from '@ethersproject/units'
//import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import ApeMotorcycleLogo from 'assets/images/ApeMotorcycleLogo.png'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

import { abiObject } from './Apeabi'
import FooterMenu from './Footer'
import { NFTAbiObject } from './NFTAbi'
const ClaimTransaction = () => {
  //const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  //const { account } = useActiveWeb3React()
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context
  //const [Externalacc, setExternalacc] = useState(Boolean)
  const [fullName, setfullName] = useState(String)
  const [ID, setID] = useState(String)
  const [houseaddress, sethouseaddress] = useState(String)
  const [ishidden, setishidden] = useState(Boolean)
  const [totalSupply, settotalySupply] = useState(Number)
  const [connected, setnotconnected] = useState(Boolean)
  const [holders, setholders] = useState(Number)
  const [userinfo, setuserinfo] = useState(String)
  const [Externalacc, setExternalacc] = useState(Boolean)
  const [price, setprice] = useState(String)
  const [nft, setnft] = useState(String)
  const [unpaidearnings, setunpaidearnings] = useState(String)
  const [userbalance, setuserbalance] = useState(Number)
  const [marketcap, setmarketcap] = useState(String)
  const [liq, setliq] = useState(String)

  const time = new Date().getTime()
  function toggleHidden() {
    setishidden(!ishidden)
  }

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
        const contractaddress = '0x5AA774d57C9415fD865bE32F4cDCEC7CAe1c69d6'
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

    async function FetchtotalSupply() {
      try {
        //setLoading(true)
        const provider = getDefaultProvider()
        const NFTabi = abiObject
        const contractaddress = '0xC4deaEbD15E3B6956cc7EF48d2AB934CA3CaB4D2'
        const contract = new Contract(contractaddress, NFTabi, provider)
        const Totalminted = await contract.totalSupply()
        const FinalResult = Number(Totalminted)
        const minted = FinalResult
        settotalySupply(minted)
        console.log(FinalResult)
        return minted
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    async function fetchacc() {
      try {
        const response = fetch('https://apeuserdetails.herokuapp.com/ ', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'text/html',
            accept: 'text/html',
          },
        })
        const data = (await response).json()
        console.log(data)
        const awaitarray = await data
        console.log(awaitarray)
        //const stringarray = JSON.stringify(awaitarray)
        const isFound = awaitarray.some((element: any) => {
          if (element.account === account) {
            return true
          }
          return false
        })
        return isFound
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success, you have created an account!')
      }
    }

    FetchBalance()
    FetchtotalSupply()
    FetchNFT().then((result) => setnft(result))
    //Fetchaccnts().then((result) => console.log(result))
    fetchacc().then((result) => setExternalacc(result))
  }, [account, showConnectAWallet])

  async function Postacc() {
    if (!account) {
      Swal.fire({
        icon: 'error',
        title: 'please connect your wallet before submitting',
      })
    }
    try {
      const options = {
        method: 'POST',
        json: true, // if truthy, parse *response* as JSON
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          // have to manually stringify object in
          address: houseaddress,
          ID,
          name: fullName,
          account,
        }),
      }
      const response = await fetch('https://apeuserdetails.herokuapp.com/ ', options)
      const data = response.json()
      return data
    } catch (error) {
      console.log(error)
    } finally {
      Swal.fire({
        icon: 'success',
        title: 'Your account has been created',
      })
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

  const test2 = insertDecimal(userbalance)

  return (
    <div style={{ justifyContent: 'space-between', alignItems: 'center' }} className={'flexbox-vertical-container'}>
      <img className={'dapp-header-image'} src={ApeMotorcycleLogo} alt="header"></img>
      <div style={{ marginTop: '3vh' }} className="flexbox-vertical-container">
        <div className="flexbox-container" style={{ justifyContent: 'center' }}>
          <div className={'Newheader-flexbox-container'}>
            <div className="flexbox-container" style={{ justifyContent: 'center' }}>
              <NavLink
                style={{ fontFamily: 'Rye, cursive', marginLeft: '3vw', textDecoration: 'none' }}
                className={'HeaderButton'}
                to="./NFTMint"
                id={'/NFTMint'}
              >
                Mint
              </NavLink>

              <button
                onClick={() => window.open('https://opensea.io/')}
                style={{ fontFamily: 'Rye, cursive' }}
                className={'HeaderButton'}
              >
                OpeanSea
              </button>
            </div>
            <button
              onClick={() => window.open('https://apemotorcycleclub.com')}
              style={{ fontFamily: 'Rye, cursive' }}
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
                  fontFamily: 'Rye, cursive',
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
          {Externalacc ? (
            <></>
          ) : (
            <div>
              <button onClick={toggleHidden} style={{ fontFamily: 'Rye, cursive' }} className={'createaccount'}>
                Create an account
              </button>
              <p style={{ paddingTop: '2vh', marginTop: '2vh', marginBottom: '2vh' }}></p>
              {!ishidden && (
                <div className={'CreateAccount-Card'}>
                  <label style={{ color: '#ffffff', fontFamily: 'Rye, cursive' }} htmlFor="fname">
                    Full Name
                  </label>
                  <input
                    onChange={(e) => setfullName(e.target.value)}
                    type="text"
                    id="fname"
                    name="Full name"
                    placeholder="Your name.."
                  ></input>

                  <label style={{ color: '#ffffff', fontFamily: 'Rye, cursive' }} htmlFor="fname">
                    Drivers ID Number
                  </label>
                  <input
                    onChange={(e) => setID(e.target.value)}
                    type="text"
                    id="ID"
                    name="Driver ID #"
                    placeholder="7306492"
                  ></input>

                  <label style={{ color: '#ffffff', fontFamily: 'Rye, cursive' }} htmlFor="fname">
                    Address
                  </label>
                  <input
                    onChange={(e) => sethouseaddress(e.target.value)}
                    type="text"
                    id="houseaddress"
                    name="Home Address"
                    placeholder="5555 rd, Vancouver, V6V 2V2"
                  ></input>
                  <div className={'flexbox-vertical-container'} style={{ justifyContent: 'center' }}>
                    {!fullName && !ID && !houseaddress && !account && (
                      <button style={{ alignSelf: 'center' }} className={'Account-Form-button'}>
                        {' '}
                        Please fill in the form fields to submit and connect your wallet.
                      </button>
                    )}
                    {fullName && ID && houseaddress && account && (
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
          )}
        </div>
      </div>
      <p style={{ marginTop: '2%' }}></p>
      <FooterMenu></FooterMenu>
    </div>
  )
}

export default ClaimTransaction
