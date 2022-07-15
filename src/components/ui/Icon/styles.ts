import styled, { css } from 'styled-components'

import { IconProps } from '.'

export const Wrapper = styled.span<IconProps>`
  ${({ name, width }) => css`
    background-image: url(/img/icons/${name}.svg);
    width: ${width}px;
    height: ${width}px;
    display: inline-block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`
