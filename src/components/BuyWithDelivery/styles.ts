import styled, { css } from 'styled-components'

import { BuyWithDeliveryProps } from '.'

export const Wrapper = styled.div<BuyWithDeliveryProps>`
  ${({ prop1 }) => css`
    content: '${prop1}';
  `}
`
