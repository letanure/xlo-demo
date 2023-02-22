import * as S from './styles'
import Price, { PriceProps } from '../Price'
import Icon, { IconProps } from '../Icon'
import Tag, { TagProps } from '../Tag'

export type PriceDetailsItemProps = {
  description?: string
  discount?: PriceProps
  icon?: IconProps['name']
  label: string
  price?: PriceProps
  tag?: TagProps
}

const PriceDetailsItem = ({
  description,
  discount,
  icon,
  label,
  price,
  tag
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
      {tag && (
        <S.PriceTag>
          <Tag {...tag} />
        </S.PriceTag>
      )}
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
