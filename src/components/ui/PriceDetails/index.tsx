import * as S from './styles'
import PriceDetailsItem, { PriceDetailsItemProps } from '../PriceDetailsItem'

export type PriceDetailsProps = {
  prices: PriceDetailsItemProps[]
}

const PriceDetails = ({ prices }: PriceDetailsProps) => (
  <S.Wrapper>
    {prices.map((price, index) => (
      <PriceDetailsItem key={index} {...price} />
    ))}
  </S.Wrapper>
)

export default PriceDetails
