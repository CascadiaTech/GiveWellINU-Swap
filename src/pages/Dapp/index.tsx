import useActiveWeb3React from 'hooks/useActiveWeb3React'

import ClaimTransaction from './ClaimTransaction'
export default function Dapp() {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  return <ClaimTransaction></ClaimTransaction>
}
