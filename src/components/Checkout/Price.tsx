import * as S from './styles'

export interface Props {
  value: number
  lineThrough?: boolean
  hasAsterisk?: boolean
}

const Price = ({ value, lineThrough, hasAsterisk }: Props) => {
  const formatNumber = (value: number) =>
    new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN'
    })
      .format(value)
      .replace(',00', '')
  return (
    <S.Price lineThrough={lineThrough}>
      <S.PriceValue>{formatNumber(value)}</S.PriceValue>
      {hasAsterisk && '*'}
    </S.Price>
  )
}

export default Price
