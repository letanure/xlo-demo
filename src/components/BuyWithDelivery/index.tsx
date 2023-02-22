import * as S from './styles'
import PriceDetails, { PriceDetailsProps } from 'components/ui/PriceDetails'

export type BuyWithDeliveryProps = {
  title?: string | number
}

const BuyWithDelivery = ({ title = 'default' }: BuyWithDeliveryProps) => {
  const prices: PriceDetailsProps['prices'] = [
    {
      label: 'Item',
      price: {
        amount: 259900,
        currency: 'PLN'
      }
    },
    {
      label: 'DELIVERY FROM',
      price: {
        amount: 400,
        currency: 'PLN'
      },
      discount: {
        amount: 899,
        currency: 'PLN'
      },
      description:
        'This discount applies for deliveries with InPost. In the 30 days before the start of this discount, the lowest price was 8,99 zł. Check terms and conditions'
    },
    {
      label: 'SERVICE FEE',
      icon: 'info',
      price: {
        amount: 250,
        currency: 'PLN'
      }
    },
    {
      label: 'SAFE DEAL',
      tag: {
        text: 'FREE'
      },
      description:
        'You have 24 hours to confirm that the item you ordered was in the package. Was the package empty or contained the wrong item? Submit a ticket to get your money back. How the Protection Package works'
    }
  ]
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <PriceDetails prices={prices} />
    </S.Wrapper>
  )
}

export default BuyWithDelivery
