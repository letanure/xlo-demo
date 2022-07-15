import * as S from './styles'

export type BuyWithDeliveryProps = {
  prop1?: string | number
}

const BuyWithDelivery = ({ prop1 = 'default' }: BuyWithDeliveryProps) => (
  <S.Wrapper prop1={prop1}>
    <h1>BuyWithDelivery with {prop1} 2</h1>
  </S.Wrapper>
)

export default BuyWithDelivery
