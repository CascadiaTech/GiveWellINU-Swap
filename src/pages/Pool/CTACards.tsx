import { Trans } from '@lingui/macro'
import { AutoColumn } from 'components/Column'
import { CHAIN_INFO } from 'constants/chainInfo'
import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'

import { ExternalLink } from '../../theme'

const CTASection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 8px;
  opacity: 0.8;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`

const CTA1 = styled(ExternalLink)`
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.bg3};

  * {
    color: ${({ theme }) => theme.text1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.bg4};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`

const CTA2 = styled(ExternalLink)`
  position: relative;
  overflow: hidden;
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.bg3};

  * {
    color: ${({ theme }) => theme.text1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.bg4};
    text-decoration: none !important;
    * {
      text-decoration: none !important;
    }
  }
`

const HeaderText = styled(ThemedText.Label)`
  align-items: center;
  display: flex;

  font-weight: 400;
  font-size: 16px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 16px;
  `};
`

const ResponsiveColumn = styled(AutoColumn)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`

export default function CTACards() {
  const { chainId } = useActiveWeb3React()
  const { infoLink } = CHAIN_INFO[chainId ? chainId : SupportedChainId.MAINNET]
  return (
    <CTASection>
      <CTA1 href={'https://give-well-inu.vercel.app'}>
        <ResponsiveColumn>
          <HeaderText>
            <Trans>Did you know we have GINU NFCTs available? You can buy them through our minting page</Trans> ↗
          </HeaderText>
          <ThemedText.Body fontWeight={400} style={{ alignItems: 'center', display: 'flex' }}>
            <Trans>Click here to go to the minting page!.</Trans>
          </ThemedText.Body>
        </ResponsiveColumn>
      </CTA1>
      <CTA2 href={'https://givewellinu.com'}>
        <ResponsiveColumn>
          <HeaderText style={{ alignSelf: 'flex-start' }}>
            <Trans>Want more info on our team? go to our website! </Trans> ↗
          </HeaderText>
          <ThemedText.Body fontWeight={400} style={{ alignSelf: 'flex-start' }}>
            <Trans>Click the title above to see more information about us .</Trans>
          </ThemedText.Body>
        </ResponsiveColumn>
      </CTA2>
    </CTASection>
  )
}
