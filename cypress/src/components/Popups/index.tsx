import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'
import { MEDIA_WIDTHS } from 'theme'

//import { useActivePopups } from '../../state/application/hooks'
import { useURLWarningVisible } from '../../state/user/hooks'
import { AutoColumn } from '../Column'
import ClaimPopup from './ClaimPopup'
//import PopupItem from './PopupItem'
//import SurveyPopup from './SurveyPopup'

const StopOverflowQuery = `@media screen and (min-width: ${MEDIA_WIDTHS.upToMedium + 1}px) and (max-width: ${
  MEDIA_WIDTHS.upToMedium + 500
}px)`

const FixedPopupColumn = styled(AutoColumn)<{ extraPadding: boolean; xlPadding: boolean }>`
  position: fixed;
  top: ${({ extraPadding }) => (extraPadding ? '64px' : '56px')};
  right: 1rem;
  max-width: 355px !important;
  width: 100%;
  z-index: 3;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};

  ${StopOverflowQuery} {
    top: ${({ extraPadding, xlPadding }) => (xlPadding ? '64px' : extraPadding ? '64px' : '56px')};
  }
`

export default function Popups() {
  // get all popups
  const urlWarningActive = useURLWarningVisible()

  // need extra padding if network is not L1 Ethereum
  const { chainId } = useActiveWeb3React()
  const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.MAINNET)

  return (
    <>
      <FixedPopupColumn gap="20px" extraPadding={urlWarningActive} xlPadding={isNotOnMainnet}>
        <ClaimPopup />
      </FixedPopupColumn>
    </>
  )
}
