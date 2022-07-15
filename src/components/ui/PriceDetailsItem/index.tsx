import * as S from './styles'
import Price, { PriceProps as PriceType } from '../Price'
import Icon, { IconProps } from '../Icon'

export type PriceDetailsItemProps = {
  description?: string
  discount?: PriceType
  icon?: IconProps['name']
  label: string
  price?: PriceType
}

const PriceDetailsItem = ({
  description,
  discount,
  icon,
  label,
  price
}: PriceDetailsItemProps) => (
  <S.Wrapper>
    <S.Label>
      {icon && (
        <S.LabelIcon>
          <Icon name={icon} />
        </S.LabelIcon>
      )}
      <S.LabelText>{label}</S.LabelText>
    </S.Label>
    <S.Price>
      {price && (
        <S.PriceRegular>
          <Price {...price} />
        </S.PriceRegular>
      )}
      {discount && (
        <S.PriceDiscount>
          {' '}
          <Price {...discount} />
        </S.PriceDiscount>
      )}
    </S.Price>
    {description && <S.Description>{description}</S.Description>}
  </S.Wrapper>
)

export default PriceDetailsItem
