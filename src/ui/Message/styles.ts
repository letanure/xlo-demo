import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff6d9;
  color: #002f34;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 16px;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
`
export const Icon = styled.img`
  width: 36px;
  height: 36px;
  display: inline-block;
`

export const Text = styled.div`
  display: inline-block;
  margin-left: 16px;
  // padding-right: 16px;
`
export const ButtonClose = styled.button`
  display: block;
  width: 16px;
  height: 16px;
  background-image: url(/img/icon-close.svg);
  background-color: transparent;
  border: none;
  margin-left: 16px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
  align-self: flex-start;
  &:hover {
    opacity: 0.5;
  }
`
