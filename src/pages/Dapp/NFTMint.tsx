/* eslint-disable prettier/prettier */
import '../DashBoard/styles.css'

import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'
//import { getDefaultProvider, Web3Provider } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
import useScrollPosition from '@react-hook/window-scroll'
import { abiObject } from './Apeabi'
import ProgressBar from 'components/ProgressBar'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect,useState } from 'react'
import Swal from 'sweetalert2'

//import WalletConnectProvider from "@web3-react/walletconnect-connector";
//import LinePic from 'assets/LinePic.png'
import blueape from '../../assets/images/blueape.png'
import { NFTAbiObject } from './NFTAbi'


///https://gateway.pinata.cloud/ipfs/QmVeMWpbq3UzbfPZnQrwSWAC9qrSPhqzWmV8ZmKyxPqH5H
const NFTMintSection = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  const [NftAmount, SetNftAmount] = useState(1)
  const [Externalacc, setExternalacc] = useState(Boolean)
  const [isWhitelisted, setisWhitelisted] = useState(Boolean)
  //const { account } = useActiveWeb3React()
  const { account } = useActiveWeb3React()
  const [percentage, setpercentage] = useState(10)
  const showConnectAWallet = Boolean(!account)
  const context = useActiveWeb3React()
  const { library } = context
  useEffect(() => {
    async function FetchExternalacc() {
      try {
        //setLoading(true)
        const response = fetch('https://rwuejgug9a.execute-api.us-east-2.amazonaws.com/fetchuserinfohello', {
          method: 'GET',
        })
        const data = (await response).json()
        return data
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success')
      }
    }

    async function FetchisWhitelisted() {
      try {
        //setLoading(true)
        const data = abiObject
        const abi = data
        console.log(data)
        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        const contractaddress = '0x5AA774d57C9415fD865bE32F4cDCEC7CAe1c69d6' // "clienttokenaddress"
        const contract = new Contract(contractaddress, abi, provider)
        const whitelistMint = await contract.isWhitelisted(account) //.claim()
        const Claimtxid = await whitelistMint
        return Claimtxid
      } catch (error) {
        console.log(error)
      } finally {
        console.log('success')
      }
    }

    FetchExternalacc()
      .then((result) => JSON.stringify(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.some((result: { [x: string]: string }) => result['address'] === account))
      .then((result) => setExternalacc(result))
    FetchisWhitelisted().then((result) => setisWhitelisted(result))
  }, [account])

 async function handleMint() {

    try {
      //setLoading(true)
      const data = NFTAbiObject
      const abi = data
      console.log(data)
      const contractaddress = '0x5AA774d57C9415fD865bE32F4cDCEC7CAe1c69d6' // "clienttokenaddress"

        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        //const provider = getDefaultProvider()
        const signer = provider.getSigner()
        console.log(signer)
        const contract = new Contract(contractaddress, abi, signer)
        const ethervalue = NftAmount * 0.25
        const etherstringvalue = JSON.stringify(ethervalue)
        const MintNFT = await contract.publicMint(NftAmount, { value: parseEther(etherstringvalue) }) //.claim()
        const Claimtxid = await MintNFT
        return Claimtxid
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }

}


async function handleWLMint() {

  try {
    //setLoading(true)
    const data = NFTAbiObject
    const abi = data
    console.log(data)
    const contractaddress = '0x5AA774d57C9415fD865bE32F4cDCEC7CAe1c69d6' // "clienttokenaddress"

      const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
      //const provider = getDefaultProvider()
      const signer = provider.getSigner()
      console.log(signer)
      const contract = new Contract(contractaddress, abi, signer)
      const ethervalue = NftAmount * 0.125
      const etherstringvalue = JSON.stringify(ethervalue)
      const MintNFT = await contract.whitelistMint(NftAmount, { value: parseEther(etherstringvalue) }) //.claim()
      const Claimtxid = await MintNFT
      return Claimtxid
    
  } catch (error) {
    console.log(error)
    setLoading(false)
  } finally {
    setLoading(false)
  }

}

  return (
    <>
  <div className={'flexbox-container'}>
    <div className={'flexbox-vertical-container'}>
      <div className={'NFT-card'}>
        <ProgressBar></ProgressBar>
      </div>
    </div>
    <div className={'flexbox-vertical-container'}>
          <p style={{ fontFamily: 'Rye, cursive', color: '#FFFFFF', fontSize: 'calc(3 * (0.5vw + 0.5vh))' }}>
              {' '}
              NFT Minting Station
          </p>
        </div>
        <div className={'NFT-card'}>
          <div className={'flexbox-vertical-container'} style={{ justifyContent: 'center' }}>
            <img

              style={{
                minWidth: '300px',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '10px',
                border: 'solid',
                marginBottom: '2vh',
                alignSelf: 'center',
              }}
              src={blueape}
              alt='blueape'
            >
              
            </img>{' '}
            <p
              style={{
                fontFamily: 'montserrat, sans-serif',
              }}
              className={'NFTmintingstationtext'}
            >
              {' '}
              Price: 0.075 ETH
            </p>
            <p
              style={{
                fontFamily: 'montserrat, sans-serif',
              }}
              className={'NFTmintingstationtext'}
            >
              {' '}
              Supply: 120/10,000
            </p>
          </div>
          <div className={'flexbox-vertical-container'}>
            <div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
              <button className={'MintButton-math'} onClick={() => SetNftAmount(NftAmount - 1)}>
                <MinusCircleOutlined style={{ fontSize: '20px' }} />
              </button>
              {NftAmount >= 0 ? (
                <h1 style={{ color: '#FFFFFF', fontSize: '24px', fontFamily: 'OpenDyslexic3' }}>{NftAmount}</h1>
              ) : (
                <></>
              )}
              <button className={'MintButton-math'} onClick={() => SetNftAmount(NftAmount + 1)}>
                {' '}
                <PlusCircleOutlined style={{ fontSize: '20px' }} />
              </button>
            </div>
            {Externalacc ? (    
              <>  
                {isWhitelisted ? (<>  <button
                  style={{ width: '10vw', marginTop: 10, marginBottom: '2vh' }}
                  className={'MintButton'}
                  onClick={() => handleWLMint()}
                >
                  {' '}
                  Whitelist Mint
                </button></>) : (<>                <button
                  style={{ width: '10vw', marginTop: 10, marginBottom: '2vh' }}
                  className={'MintButton'}
                  onClick={() => Swal.fire('You are not Whitlisted', ' You must wait to mint until presale ends')}
                >
                  {' '}
                  Not Whitelisted
                </button></>)}
              {NftAmount > 0 && NftAmount <= 3 ? (
              <div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
                <button
                  style={{ width: '10vw', marginTop: 10, marginBottom: '2vh' }}
                  className={'MintButton'}
                  onClick={() => handleMint()}
                >
                  {' '}
                  Mint
                </button>
              </div>
            ) : (
              <div className={'flexbox-vertical-container'}>
                <p
                  style={{
                    color: '#000000',
                    textAlign: 'center',
                    fontFamily: 'montserrat, sans-serif',
                    maxWidth: '100vw',
                  }}
                >
                  {' '}
                  You are only alowed to mint in between 1-3 ApeMotorCycleClub NFTs at a time.{' '}
                </p>
              </div>      
            )}
            </>) : (
                <div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
                <button
                  style={{ width: '10vw', marginTop: 10, marginBottom: '2vh' }}
                  className={'MintButton'}
                  onClick={() => Swal.fire('You do not have an account yet', ' go make an account to mint an NFT')}
                >
                  {' '}
                  Mint
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default NFTMintSection
