import styled from 'styled-components'

export const ButtonCancel = styled.button`
  font-family: inherit;
  overflow: visible;
  border: 0px rgb(0, 47, 52);
  border-radius: 0px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  min-height: 40px;
  text-decoration: none;
  line-height: 18px;
  background-color: transparent;
  color: rgb(0, 47, 52);
  width: 100%;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  padding: 2px;
  float: left;
  width: 50%;
`
export const ButtonNext = styled.button`
  font-family: inherit;
  overflow: visible;
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  min-height: 40px;
  position: relative;
  text-decoration: none;
  line-height: 18px;
  background-color: rgb(0, 47, 52);
  border: 5px solid rgb(0, 47, 52);
  border-radius: 4px;
  color: rgb(255, 255, 255);
  width: 100%;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  padding: 2px;
  float: left;
  width: 50%;
  &:hover {
    background-color: transparent;
    color: rgb(0, 47, 52);
  }
`
