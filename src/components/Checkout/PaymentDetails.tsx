import * as S from './styles'
import { languages } from './locales'
import Price from './Price'

interface Props {
  languageCode: string
  priceItem: number
  priceService: number
  priceDelivery: number
  priceDeliveryOriginal: number
}

const PaymentDetails = ({
  languageCode,
  priceItem,
  priceService,
  priceDelivery,
  priceDeliveryOriginal
}: Props) => {
  const i18n: Language = languages[languageCode]

  const totalPriceStr = priceItem + priceDelivery + priceService

  const totalOriginalPriceStr = priceItem + priceDeliveryOriginal + priceService

  return (
    <S.BoxPaymentDetails>
      <S.BoxTitlePayment>{i18n.paymentDetails}</S.BoxTitlePayment>
      <S.PriceDetail>
        <S.PriceDetailLine>
          <S.PriceDetailLineLabel>{i18n.subject}</S.PriceDetailLineLabel>
          <S.PriceDetailLineValue>
            <Price value={priceItem} />
          </S.PriceDetailLineValue>
        </S.PriceDetailLine>
        <S.PriceDetailLine>
          <S.PriceDetailLineLabel>{i18n.shippingCost}</S.PriceDetailLineLabel>
          <S.PriceDetailLineValue>
            <Price
              value={priceDelivery}
              hasAsterisk={!!priceDeliveryOriginal}
            />
            {priceDeliveryOriginal && priceDeliveryOriginal > priceDelivery && (
              <Price value={priceDeliveryOriginal} lineThrough={true} />
            )}
          </S.PriceDetailLineValue>
        </S.PriceDetailLine>

        <S.PriceDetailLine>
          <S.PriceDetailLineLabel>
            <S.IconInfo src="/img/icon-info.svg" width="24" height="24" />
            {i18n.service}
          </S.PriceDetailLineLabel>
          <S.PriceDetailLineValue>
            <Price value={priceService} />
          </S.PriceDetailLineValue>
        </S.PriceDetailLine>

        <S.PriceDetailLine>
          <S.PriceDetailLineLabel>{i18n.totalCost}</S.PriceDetailLineLabel>
          <S.PriceDetailLineValue>
            <Price value={totalPriceStr} />
            {priceDeliveryOriginal && priceDeliveryOriginal > priceDelivery && (
              <Price value={totalOriginalPriceStr} lineThrough={true} />
            )}
          </S.PriceDetailLineValue>
        </S.PriceDetailLine>
      </S.PriceDetail>
    </S.BoxPaymentDetails>
  )
}

export default PaymentDetails
