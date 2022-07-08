import * as S from './styles'

export interface Props {
  value: string
  lineThrough?: boolean
  hasAsterisk?: boolean
}

const Price = ({ value, lineThrough, hasAsterisk }: Props) => {
  return (
    <S.Price lineThrough={lineThrough}>
      <S.PriceValue>{value}</S.PriceValue>
      <S.PriceCurrency>zł</S.PriceCurrency>
      {hasAsterisk && '*'}
    </S.Price>
  )
}

export default Price
