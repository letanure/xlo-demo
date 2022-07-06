import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  background-color: #f2f4f5;
  color: #002f34;
`

export const TopNav = styled.div`
  ${() => css`
    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`

export const IconBack = styled.img`
  height: 24px;
  width: 24px;
  color: rgb(0, 47, 52);
  margin-bottom: 12px;
`

export const IconInfo = styled.img`
  height: 24px;
  width: 24px;
  color: rgb(64, 99, 103);
  float: left;
  margin-right: 8px;
`

export const Logo = styled.img`
  height: 24px;
  width: 42px;
`

export const TextBack = styled.div`
  font-size: 32px;
  line-height: 34px;
  font-weight: 500;
  color: rgb(0, 47, 52);
  margin: 0px 0px 12px;
`

export const Content = styled.main`
  ${() => css`
    padding: 0 0 100px 0;
    ${media.greaterThan('medium')`
      margin: 0px auto;
      max-width: 1236px;
      padding: 32px 0px;
    `}
  `}
`

export const ProductName = styled.h2`
  ${() => css`
    font-size: 32px;
    line-height: 34px;
    color: #002f34;
    margin: 0px 0px 26px;
    font-weight: 500;
    padding: 0px;
    display: none;
    ${media.greaterThan('medium')`
      display: block;
    `}
  `}
`

export const Box = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 16px;
  margin-bottom: 8px;
`

export const BoxPicName = styled(Box)`
  display: flex;
  margin-bottom: 0px;
  padding-bottom: 0px;
`

export const BoxNameLocal = styled(Box)`
  padding: 0 0 0 16px;
`
export const ProductImage = styled.img`
  width: 130px;
  height: 90px;
  object-position: center center;
  object-fit: cover;
  flex-shrink: 0;
`
export const PriceDetail = styled.div``
export const PriceDetailLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  line-height: 24px;
`
export const PriceDetailLineLabel = styled.div`
  font-size: 14px;
`
export const PriceDetailLineValue = styled.div`
  font-size: 14px;
`

export const Price = styled.span<PriceProps>`
  ${({ lineThrough }) => css`
    font-size: 14px;
    ${lineThrough &&
    `
    text-decoration: line-through;
    color: rgb(127, 151, 153);
    margin-left: 8px;
    `}
  `}
`
export const PriceValue = styled.span``
export const PriceCurrency = styled.span`
  margin-left: 2px;
`

export const ProductNameMobile = styled.div`
  font-size: 18px;
  font-weight: 500;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 0px;
  margin: 0;
`

export const BoxActions = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 16px;
  box-shadow: rgb(0 0 0 / 10%) 0px -2px 4px 0px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  margin-bottom: 8px;
  margin-bottom: 0;
`

export const ProductInfo = styled.div`
  font-size: 12px;
`

export const BoxTitle = styled.div`
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: rgb(0, 47, 52);
  margin: 0px 0px 8px;
  font-weight: 600;
`
export const BoxSubTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgb(64, 99, 103);
  margin: 16px 0px;
`

export const DeliveryMethodsWrapper = styled.div``

export const DeliveryMethodBox = styled.div`
  border-radius: 4px;
  width: 100%;
  margin-bottom: 8px;
  border: 2px solid rgb(216, 223, 224);
  box-sizing: border-box;
  padding: 24px;
`
export const DeliveryMethodBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DeliveryMethodBoxContent = styled.div`
  padding-top: 8px;
`
export const DeliveryMethodBoxContentPrice = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`
export const DeliveryMethodBoxFooter = styled.div``
export const DeliveryMethodBoxFooterLink = styled.a`
  font-size: 14px;
  border-bottom: 2px solid #002f34;
  padding: 0 0 2px 0;
  display: inline-block;
  font-weight: 600;
`

export const DeliveryMethodTitle = styled.div`
  line-height: 18px;
  color: rgb(0, 47, 52);
  margin: 0px;
  font-size: 16px;
`
export const DeliveryMethodSubtitle = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: rgb(64, 99, 103);
  margin-bottom: 16px;
`

export const DeliveryMethodsMessage = styled.div`
  color: rgb(64, 99, 103);
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin: 0px;
  padding-top: 8px;
`
export const DeliveryMethodsMessageLink = styled.a`
  color: rgb(58, 119, 255);
  margin-left: 4px;
  font-weight: 600;
`
export const paymentMethodInfo = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 47, 52);
  margin: 16px 0px;
`
export const paymentMethodOption = styled.div`
  color: #002f34;
`
