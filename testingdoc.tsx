aysnc function FetchNFT() {
    try {
      const settings = {
        apiKey: '3JTCnITteGZR7Uu4QbBFzraeVCVlVokg', // Replace with your Alchemy API Key.
        network: Network.ETH_RINKEBY, // Replace with your network.
        maxRetries: 10,
      }

      const alchemy = initializeAlchemy(settings)

      // Print owner's wallet address:
      const ownerAddr = '0xf7cfdA72776823c3363167D6EBE88CC0b1963934'
      console.log('fetching NFTs for address:', ownerAddr)
      console.log('...')

      // Print total NFT count returned in the response:
      const nftsForOwner = await getNftsForOwner(alchemy, '0xf7cfdA72776823c3363167D6EBE88CC0b1963934')
      console.log('number of NFTs found:', nftsForOwner.totalCount)
      console.log('...')

      // Print contract address and tokenId for each NFT:
      for (const nft of nftsForOwner.ownedNfts) {
        console.log('===')
        console.log('contract address:', nft.contract.address)
        console.log('token ID:', nft.tokenId)
      }
      console.log('===')

      // Fetch metadata for a particular NFT:
      console.log('fetching metadata for a Fun ape NFT...')
      const response = await getNftMetadata(alchemy, '0xa2607d28f7a899e38abe99c67ccb37127875be7e', '1')
      return response
    } catch (error) {
      console.log(error)
    } finally {
      console.log('success')
    }
  }