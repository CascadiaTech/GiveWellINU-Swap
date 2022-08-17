/* eslint-disable prettier/prettier */
import '../DashBoard/styles.css'

import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'
//import { getDefaultProvider, Web3Provider } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
import useScrollPosition from '@react-hook/window-scroll'
//import WalletConnectProvider from "@web3-react/walletconnect-connector";
//import LinePic from 'assets/LinePic.png'
import mintinggif from 'assets/mintinggif.mp4'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useState } from 'react'

import { NFTAbiObject } from './NFTAbi'



const NFTMintSection = () => {
  const scrollY = useScrollPosition()
  const [loading, setLoading] = useState(false)
  const [NftAmount, SetNftAmount] = useState(1)
  //const { account } = useActiveWeb3React()
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useActiveWeb3React()
  const { library } = context


 async function handleMint() {

    try {
      //setLoading(true)
      const data = NFTAbiObject
      const abi = data
      console.log(data)
      const contractaddress = '0xC4deaEbD15E3B6956cc7EF48d2AB934CA3CaB4D2' // "clienttokenaddress"

        const provider = new Web3Provider(library?.provider as ExternalProvider | JsonRpcFetchFunc)
        //const provider = getDefaultProvider()
        const signer = provider.getSigner()
        console.log(signer)
        const contract = new Contract(contractaddress, abi, signer)
        const ethervalue = NftAmount * 0.075
        const etherstringvalue = JSON.stringify(ethervalue)
        const MintNFT = await contract.mint(NftAmount, { value: parseEther(etherstringvalue) }) //.claim()
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
      <div className={'NFT-card'}>
        <div className={'flexbox-container-nft'} style={{ justifyContent: 'center' }}>
          <div className={'flexbox-vertical-container'}>
            <h1 style={{ fontFamily: 'montserrat, sans-serif' }} className={'Animeverseblackheadertext'}>
              {' '}
              NFT Minting Station
            </h1>
            <div style={{ alignSelf: 'center' }} className={'flexbox-container'}>
              <button className={'MintButton'} onClick={() => SetNftAmount(NftAmount - 1)}>
                <MinusCircleOutlined style={{ fontSize: '20px' }} />
              </button>
              {NftAmount >= 0 ? (
                <h1 style={{ color: '#000000', fontSize: '24px', fontFamily: 'OpenDyslexic3' }}>{NftAmount}</h1>
              ) : (
                <></>
              )}
              <button className={'MintButton'} onClick={() => SetNftAmount(NftAmount + 1)}>
                {' '}
                <PlusCircleOutlined style={{ fontSize: '20px' }} />
              </button>
            </div>
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
                  You are only alowed to mint in between 1-3 Animeverse NFTs at a time.{' '}
                </p>
              </div>
            )}
          </div>
          <div className={'flexbox-vertical-container'}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                minWidth: '300px',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '10px',
                border: 'solid',
                marginBottom: '2vh',
              }}
            >
              <source src={mintinggif} type="video/mp4" />
            </video>{' '}
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
              Supply: 120/150
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFTMintSection
