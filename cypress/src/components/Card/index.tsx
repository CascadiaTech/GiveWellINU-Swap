import { Box } from 'rebass/styled-components'
import styled from 'styled-components/macro'

const Card = styled(Box)<{ width?: string; padding?: string; border?: string; $borderRadius?: string }>`
  width: ${({ width }) => width ?? '100%'};
  padding: ${({ padding }) => padding ?? '1rem'};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? '16px'};
  border: ${({ border }) => border};
`
export default Card

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg1};
`

export const LightGreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg2};
`

export const GreyCard = styled(Card)`
  background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(250, 202, 10) 17%, rgb(250, 202, 10) 100%);
`
// background-image: linear-gradient(to right, rgb(255, 25, 25) 0%, rgb(255, 163, 5) 21%, rgb(250, 160, 5) 100%);
export const RedCard = styled(Card)`
  background-color: #ff0000;
`

export const DarkCard = styled(Card)`
  border-style: solid;
  background-color: #ffffff;
  border-width: 1px;
  border-radius: 4px;
  border-image: linear-gradient(45deg, rgb(122, 9, 125), rgb(219, 0, 48), rgb(179, 2, 181)) 1;
`

export const OutlineCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.bg3};
`

export const YellowCard = styled(Card)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({ theme }) => theme.yellow3};
  font-weight: 500;
`

export const BlueCard = styled(Card)`
  background-color: ${({ theme }) => theme.primary5};
  color: ${({ theme }) => theme.blue2};
  border-radius: 12px;
`
