import * as S from './styles'
import { languages } from './locales'
import Price from './Price'

interface Props {
  languageCode: string
  priceDelivery: string
  priceDeliveryOriginal: string
}

const DeliveryMethods = ({
  languageCode,
  priceDelivery,
  priceDeliveryOriginal
}: Props) => {
  const i18n: Language = languages[languageCode]

  return (
    <S.Box>
      <S.BoxTitle>{i18n.deliveryMethodsTitle}</S.BoxTitle>
      <S.BoxSubTitle>{i18n.deliveryMethodsSubTitle}</S.BoxSubTitle>
      <S.DeliveryMethodsWrapper>
        <S.DeliveryMethodBox>
          <S.DeliveryMethodBoxHeader>
            <S.DeliveryMethodTitle>Poczta Polska</S.DeliveryMethodTitle>
            <S.Logo src="/img/logo-poczta-polska.svg" width="42" height="24" />
          </S.DeliveryMethodBoxHeader>
          <S.DeliveryMethodBoxContent>
            <S.DeliveryMethodBoxContentPrice>
              <Price
                value={priceDelivery}
                hasAsterisk={!!priceDeliveryOriginal}
              />
              {priceDeliveryOriginal && (
                <Price value={priceDeliveryOriginal} lineThrough={true} />
              )}
            </S.DeliveryMethodBoxContentPrice>
            <S.DeliveryMethodSubtitle>{i18n.pickupOn}</S.DeliveryMethodSubtitle>
          </S.DeliveryMethodBoxContent>
          <S.DeliveryMethodBoxFooter>
            <S.DeliveryMethodBoxFooterLink>
              {i18n.pickApoint}
            </S.DeliveryMethodBoxFooterLink>
          </S.DeliveryMethodBoxFooter>
        </S.DeliveryMethodBox>
      </S.DeliveryMethodsWrapper>
      <S.DeliveryMethodsMessage>
        {i18n.termsAndConditionsText}
        <S.DeliveryMethodsMessageLink>
          {i18n.termsAndConditionsLink}
        </S.DeliveryMethodsMessageLink>
      </S.DeliveryMethodsMessage>
    </S.Box>
  )
}

export default DeliveryMethods
