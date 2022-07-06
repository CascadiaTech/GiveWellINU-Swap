import { useWeb3React } from '@web3-react/core'

import DashBoardComponent from './DashBoardComponent'
// in header.index on line 190 is the class name for the styled navbar
// then on line 299 is the vote link so er would need to chnage the navbar to point to our new page

export default function DashBoard() {
  const { account } = useWeb3React()
  const showConnectAWallet = Boolean(!account)

  if (showConnectAWallet) {
    return <div> connect a wallet fucker</div>
  } else {
    return <DashBoardComponent></DashBoardComponent>
  }
}
