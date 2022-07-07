import styled from 'styled-components'

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

export const Input = styled.input`
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
  :focus {
    border-bottom-color: rgb(0, 47, 52);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
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
