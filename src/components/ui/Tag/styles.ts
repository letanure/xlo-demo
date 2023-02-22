import styled, { css } from 'styled-components'

import { TagProps } from '.'

export const Wrapper = styled.span<TagProps>`
  ${({ theme }) => css`
    align-items: center;
    background: #ffce32;
    border-radius: 4px;
    display: flex;
    display: inline-block;
    font-family: ${theme.font.family.heading.name};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.8px;
    line-height: 16px;
    padding: 4px 8px;
    text-transform: uppercase;
  `}
`
