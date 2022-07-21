import Network from '@alch/alchemy-sdk'
import initializeAlchemy from '@alch/alchemy-sdk'
import getNftsForOwner from '@alch/alchemy-sdk'
import getNftMetadata from '@alch/alchemy-sdk'
//const { getNftMetadata, getNftsForOwner, initializeAlchemy, Network } = require('@alch/alchemy-sdk')
// Optional Config object, but defaults to demo api-key and eth-mainnet.

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
const nftsForOwner = getNftsForOwner(alchemy, '0xf7cfdA72776823c3363167D6EBE88CC0b1963934')
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
const response = getNftMetadata(alchemy, '0xa2607d28f7a899e38abe99c67ccb37127875be7e', '1')

console.log(response.tokenUri)
const tokenuri = response.tokenUri.gateway
const Tokenimage = fetch(tokenuri)
//const tokenimage = await Tokenimage
const NFTimage = response.rawMetadata.image

// Uncomment this line to see the full api response:
// console.log(response);

export const metadataurl = response.rawMetadata.image

// Print some commonly used fields:
console.log('NFT name: ', response.title)
console.log('token type: ', response.tokenType)
console.log('tokenUri: ', response.tokenUri.gateway)
console.log('image url: ', response.rawMetadata.image)
console.log('time last updated: ', response.timeLastUpdated)
console.log('===')
