import styled, { css } from 'styled-components'

export const WrapperField = styled.label`
  display: block;
  margin-bottom: 16px;
`

export const Label = styled.div`
  display: block;
  font-family: Geomanist, Arial, sans-serif;
  box-sizing: initial;
  margin: 0px;
  padding: 0px 0px 8px;
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 47, 52);
  padding-bottom: 6px;
`

type InputProps = { hasError: boolean }

export const Input = styled.input<InputProps>`
  ${({ hasError }) => css`
    -webkit-text-size-adjust: 100%;
    font-family: inherit;
    margin: 0;
    overflow: visible;
    font-size: 16px;
    color: rgb(0, 47, 52);
    background-color: rgb(242, 244, 245);
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 2px solid rgb(242, 244, 245);
    border-radius: 4px;
    line-height: 20px;
    outline: 0px;
    padding: 14px 48px 14px 16px;
    width: 100%;
    box-sizing: border-box;
    height: 48px;
    ${hasError &&
    css`
      border-bottom: 2px solid rgb(255, 86, 54);
      background-image: url(/img/icon-error.svg);
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: 98% center;
    `}
    :focus {
      border-bottom-color: rgb(0, 47, 52);
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      ${hasError &&
      css`
        border-bottom: 2px solid rgb(255, 86, 54);
      `}s
    }
  `}
`

export const ErrorMessage = styled.div`
  font-family: Geomanist, Arial, sans-serif;
  box-sizing: initial;
  font-size: 14px;
  line-height: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin: 0px;
  color: rgb(255, 86, 54);
`
