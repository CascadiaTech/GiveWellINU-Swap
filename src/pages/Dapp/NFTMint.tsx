/* eslint-disable prettier/prettier */
import '../DashBoard/styles.css'
import './Carousel.css'

import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
//import { getDefaultProvider, Web3Provider } from '@ethersproject/providers'
import ProgressBar from '@ramonak/react-progress-bar'
import useScrollPosition from '@react-hook/window-scroll'
import MotorcycleVanPhoto from 'assets/images/MotorcycleVanPhoto.png'
import SlideShowComponent from 'components/SlideShow/SlideShowComponent'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect,useState } from 'react'
import Swal from 'sweetalert2'

import { abiObject } from './Apeabi'


///https://gateway.pinata.cloud/ipfs/QmVeMWpbq3UzbfPZnQrwSWAC9qrSPhqzWmV8ZmKyxPqH5H
const NFTMintSection = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  const [totalSupply, settotalySupply] = useState(Number)
  const [MintPrice, setpubmintprice] = useState(Number)
  const [NftAmount, SetNftAmount] = useState(1)
  const [Externalacc, setExternalacc] = useState(Boolean)
  const [isWhitelisted, setisWhitelisted] = useState(Boolean)
  const [pubmintactive, setpubmintactive ] = useState(Boolean)
  //const { account } = useActiveWeb3React()
  const { account } = useActiveWeb3React()
  const [percentage, setpercentage] = useState(10)
  const showConnectAWallet = Boolean(!account)
  const context = useActiveWeb3React()
  const { library } = context

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS

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
        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        const contractaddress = '0x26937cBe389C7524798DD4577d1d14AFc3948e9c' // "clienttokenaddress"
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

    async function FetchtotalSupply() {
      try {
        //setLoading(true)
        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        const NFTabi = abiObject
        const contractaddress = '0x26937cBe389C7524798DD4577d1d14AFc3948e9c'
        const contract = new Contract(contractaddress, NFTabi, provider)
        const Totalminted = await contract.totalSupply()
        const FinalResult = Number(Totalminted)
        const minted = FinalResult
        settotalySupply(minted)
        return minted
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    
    async function FetchPublicMintPrice() {
      try {
        //setLoading(true)
        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        const NFTabi = abiObject
        const contractaddress = '0x26937cBe389C7524798DD4577d1d14AFc3948e9c'
        const contract = new Contract(contractaddress, NFTabi, provider)
        const Mintprice = await contract.PUB_MINT_PRICE()
        const FinalResult = Number(Mintprice)
        const PublicMintPrice = FinalResult
        setpubmintprice(PublicMintPrice)
        return PublicMintPrice
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchPublicMintActive() {
      try {
        //setLoading(true)
        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        const NFTabi = abiObject
        const contractaddress = '0x26937cBe389C7524798DD4577d1d14AFc3948e9c'
        const contract = new Contract(contractaddress, NFTabi, provider)
        const Mintactive= await contract.pubMintActive()
        setpubmintactive(Mintactive)
        return Mintactive
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
        const awaitarray = await data
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
    fetchacc().then((result) => setExternalacc(result))
    FetchPublicMintPrice()
    FetchtotalSupply()
    FetchPublicMintActive()
    FetchisWhitelisted().then((result) => setisWhitelisted(result))
  }, [MintPrice, account, library?.provider, totalSupply]
    )

 async function handleMint() {

    try {
      //setLoading(true)
      const data = abiObject
      const abi = data
      const contractaddress = '0x26937cBe389C7524798DD4577d1d14AFc3948e9c' // "clienttokenaddress"

        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        //const provider = getDefaultProvider()
        const signer = provider.getSigner()
        const contract = new Contract(contractaddress, abi, signer)
        const ethervalue = NftAmount * 0.25
        const etherstringvalue = JSON.stringify(ethervalue)
        const MintNFT = await contract.publicMint(NftAmount, { value: parseEther(etherstringvalue) }) //.claim()
        const signtransaction = await signer.signTransaction(MintNFT)
        const Claimtxid = await signtransaction
        return Claimtxid
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      Swal.fire('Congratulations! You have minted an ApeMotorcycleClub NFT')
    }

}


async function handleWLMint() {

  try {
    //setLoading(true)
    const data = abiObject
    const abi = data
    const contractaddress = '0x26937cBe389C7524798DD4577d1d14AFc3948e9c' // "clienttokenaddress"

      const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
      //const provider = getDefaultProvider()
      const signer = provider.getSigner()
      const contract = new Contract(contractaddress, abi, signer)
      const ethervalue = NftAmount * 0.025
      const etherstringvalue = JSON.stringify(ethervalue)
      const MintNFT = await contract.whitelistMint(NftAmount, { value: parseEther(etherstringvalue) }) //.claim()
      const signminttransaction = await signer.signTransaction(MintNFT)
      const Claimtxid = await signminttransaction
      return Claimtxid
    
  } catch (error) {
    console.log(error)
    setLoading(false)
  } finally {
    Swal.fire('Congratulations! You have minted an ApeMotorcycleClub NFT')
  }


}

const mintpricemath = 0.024999999999999998
const Finalmintprice = mintpricemath.toFixed(3)

  return (
    <>
    <div style={{ marginBottom: '2vh' }} className={'flexbox-container'}>
       <p style={{ fontFamily: 'Rye, cursive', 
       color: '#FFFFFF', fontSize: 'calc(3 * (0.6vw + 0.6vh))', paddingLeft: '3vw' }}>
       NFT Minting Station
       </p>
    </div>
  <div className={'flexbox-container-hidden'}>
    <div className={'flexbox-vertical-container'}>
      <div className={'NFT-card'}>
        <img src={MotorcycleVanPhoto} style={{ height: '22vw', minHeight: '200px', width: '30vw',
         minWidth: '200px' }} alt={'Motorcycle'}></img>
      </div>
    </div>
    <div className={'flexbox-vertical-container'}> 
        </div>
        <div className={'NFT-mint-card'}>
          <div className={'flexbox-vertical-container'} style={{ justifyContent: 'center' }}>
            <div className={'slideshow'}>
          <SlideShowComponent></SlideShowComponent>
          </div>
            <p
              style={{ fontFamily: 'montserrat, sans-serif' }}
              className={'NFTmintingstationtext'}
            >
              {' '}
              Price: {Finalmintprice} ETH
            </p>
            <p
              style={{
                fontFamily: 'montserrat, sans-serif',
              }}
              className={'NFTmintingstationtext'}
            >
              {' '}
              Supply: {totalSupply}/10,000
            </p>
            <ProgressBar completed={totalSupply} maxCompleted={10000} />
          </div>
          <p style={{ marginBottom: '2vh', marginTop: '2vh' }}></p>
          <div className={'flexbox-vertical-container'}>
            <div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
              <button className={'MintButton-math'} onClick={() => SetNftAmount(NftAmount - 1)}>
                <MinusCircleOutlined style={{ fontSize: '25px' }} />
              </button>
              {NftAmount >= 0 ? (
                <h1 style={{ color: '#FFFFFF', fontSize: '24px', fontFamily: 'OpenDyslexic3' }}>{NftAmount}</h1>
              ) : (
                <></>
              )}
              <button className={'MintButton-math'} onClick={() => SetNftAmount(NftAmount + 1)}>
                {' '}
                <PlusCircleOutlined style={{ fontSize: '25px' }} />
              </button>
            </div>
            
            { Externalacc ? (
          <>
          {isWhitelisted ? (
           <>{ NftAmount >0 && NftAmount <= 10 ? ( 
           <div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
            <button
                style={{ marginTop: 10, marginBottom: '2vh' }}
                className={'MintButton'}
                onClick={() => handleWLMint()}
                >
                {' '}
                Whitelist Mint
            </button>
             </div>) : (<> <div style={{ justifyContent: 'fit-content', maxWidth: '60vw' }}>
               You can only Mint between 1-10 NFTS at a time 
            </div>  </>) }
           </>) : (
            <> {pubmintactive ? (<>
            { NftAmount >0 && NftAmount <= 8 ? (<div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
                <button
                  style={{ marginTop: 10, marginBottom: '2vh' }}
                  className={'MintButton'}
                  onClick={() => handleMint()}
                >
                  {' '}
                  Mint
                </button>
            </div>) : (<div style={{ maxWidth: '50vw' }}><p></p> You can only Mint between 1-10 NFTS at a time 
            </div>)}

            </>) 
              :(<>  <div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
              <button
                style={{ marginTop: 10, marginBottom: '2vh' }}
                className={'MintButton'}
                onClick={() => Swal.fire('Your wallet has not been WhiteListed, wait for public sale!')}
              >
                {' '}
                You are not WhiteListed
              </button>
            </div>
              </>)}
              </>)}</>) : ( <div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
                <button
                  style={{ marginTop: 10, marginBottom: '2vh' }}
                  className={'MintButton'}
                  onClick={() => Swal.fire('You do not have an account yet', ' go make an account to mint an NFT')}
                >
                  {' '}
                  Make an account
                </button>
              </div>)}
            </div>
        </div>
      </div>
    </>
  )
}

export default NFTMintSection

//{ variable ? (<> true statment</>) : (<> false statment</>)}
// ^ is true or false? 
