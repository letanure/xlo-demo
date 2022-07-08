import styled from 'styled-components'

export const Box = styled.div`
  background-color: rgb(255, 255, 255);

  margin-bottom: 8px;
  position: fixed;
  top: 16px;
  width: calc(100vw - 42px);
  height: calc(100vh - 32px);
  overflow: scroll;
  left: 16px;
  box-shadow: 0px 0px 13px 6px rgb(0 0 0 / 25%);
  z-index: 10;
`
export const BoxContent = styled.div`
  padding: 16px;
`

export const BoxFooter = styled.div`
  position: sticky;
  bottom: 0;
  padding: 16px;
  background-color: rgb(255, 255, 255);
`

export const BoxTitle = styled.div`
  padding: 16px;
  background-color: rgb(255, 255, 255);
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: rgb(0, 47, 52);
  margin: 0px 0px 8px;
  font-weight: 600;
  position: sticky;
  top: 0;
`
