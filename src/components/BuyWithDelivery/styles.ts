import styled, { css } from 'styled-components'

import { BuyWithDeliveryProps } from '.'

export const Wrapper = styled.div<BuyWithDeliveryProps>`
  ${() => css`
    max-width: 360px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 16px;
  `}
`

export const Title = styled.div<BuyWithDeliveryProps>`
  ${({ theme }) => css`
    font-family: ${theme.font.family.heading.name};
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 24px;
  `}
`
