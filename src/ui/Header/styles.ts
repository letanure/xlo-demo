import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${() => css`
    background-color: #002f34;
    height: 88px;
    padding: 16px 48px;
    display: none;
    ${media.greaterThan('medium')`
      display: block;
    `}
  `}
`

export const Logo = styled.img`
  width: 72px;
  height: 58px;
`
