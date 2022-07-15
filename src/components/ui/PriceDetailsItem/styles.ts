import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 24px;
  `}
`

export const Label = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-family: ${theme.font.family.body.name};
    font-size: ${theme.font.size.xsmall};
    font-weight: ${theme.font.weight.normal};
    line-height: ${theme.font.lineHeight.large};
    text-align: left;
    width: 50%;
  `}
`
export const LabelIcon = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.xxxsmall};
  `}
`

export const LabelText = styled.div`
  ${() => css``}
`

export const Price = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.heading.name};
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.bold1};
    line-height: ${theme.font.lineHeight.large};
    text-align: left;
    width: 50%;
  `}
`

export const PriceRegular = styled.span`
  ${() => css``}
`

export const PriceDiscount = styled.span`
  ${({ theme }) => css`
    text-decoration: line-through;
    color: ${theme.color.primary.disabled};
    color: #7f9799;
    display: inline-block;
    margin-left: 5px;
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.body.name};
    font-size: ${theme.font.size.xsmall};
    font-weight: ${theme.font.weight.normal};
    line-height: ${theme.font.lineHeight.xsmall};
    margin-top: ${theme.spacing.xxxsmall};
    text-align: left;
    width: 100%;
  `}
`
