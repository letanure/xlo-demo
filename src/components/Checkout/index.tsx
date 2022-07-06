import { useRouter } from 'next/router'

import Header from '../../ui/Header'
import * as S from './styles'

interface Params {
  productName: string
  language: string
  priceItem: string
  priceDelivery: string
  priceDeliveryOriginal?: string
  priceService: string
}

const Main = () => {
  const router = useRouter()

  const defaultParams: Params = {
    productName: 'Product Name',
    language: 'en',
    priceItem: '2500',
    priceDelivery: '5',
    // priceDeliveryOriginal || 0: null, //'17.99',
    priceService: '20'
  }

  const params: Params = {
    ...defaultParams,
    ...router.query
  }

  const texts: Languages = {
    en: {
      backText: 'Buy with delivery',
      deliveryMethodsTitle: 'Delivery method',
      deliveryMethodsSubTitle: 'Pickup at the selected point.',
      termsAndConditionsText: '* Check the',
      termsAndConditionsLink: 'terms and conditions',
      yourDataTitle: 'Your data',
      paymentMethodTitle: 'Payment method',
      paymentMethodOption1:
        'The item can be purchased using this payment method:',
      paymentMethodBlik: 'Online payments - BLIK, Bank transfer',
      supportUkraineTitle: '🇺🇦 Support Ukraine',
      shoppingSecurity: 'Shopping security',
      paymentDetails: 'Payment details',
      subject: 'Subject:',
      shippingCost: 'Shipping cost:',
      service: 'Service:',
      totalCost: 'Total cost:',
      pickupOn:
        'Pick up at the Post Office, Żabka store or at the Orlen station',
      pickApoint: 'Pick a point'
    },
    pl: {
      backText: 'Kup z dostawą',
      deliveryMethodsTitle: 'Sposób dostawy',
      deliveryMethodsSubTitle: 'Odbiór w wybranym punkcie.',
      termsAndConditionsText: '* Cena promocyjna',
      termsAndConditionsLink: 'Sprawdź warunki',
      yourDataTitle: 'Twoje dane',
      paymentMethodTitle: 'Metoda płatności',
      paymentMethodOption1:
        'Przedmiot można kupić przy użyciu tej metody płatności:',
      paymentMethodBlik: 'Płatności online - BLIK, Przelew bankowy',
      supportUkraineTitle: '🇺🇦 Wesprzyj Ukrainę',
      shoppingSecurity: 'Bezpieczeństwo zakupów',
      paymentDetails: 'Szczegóły płatności',
      subject: 'Przedmiot:',
      shippingCost: 'Koszt przesyłki:',
      service: 'Usługa serwisowa:',
      totalCost: 'Całkowity koszt:',
      pickupOn:
        'Odbierz w Urzędzie Pocztowym, sklepie Żabka lub na stacji Orlen',
      pickApoint: 'Wybierz punkt'
    }
  }
  const i18n: Language = texts[params.language]

  const Price = ({ value, lineThrough, hasAsterisk }: PriceProps) => (
    <S.Price lineThrough={lineThrough}>
      <S.PriceValue>{value}</S.PriceValue>
      <S.PriceCurrency>zł</S.PriceCurrency>
      {hasAsterisk && '*'}
    </S.Price>
  )

  const totalPriceStr = `${
    parseFloat(params.priceItem) +
    parseFloat(params.priceDelivery) +
    parseFloat(params.priceService)
  }`

  const totalOriginalPriceStr = `${
    parseFloat(params.priceItem) +
    parseFloat(params.priceDeliveryOriginal || '0') +
    parseFloat(params.priceService)
  }`

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.ProductName>{params.productName}</S.ProductName>
        <S.TopNav>
          <S.Box>
            <S.IconBack
              src="/img/icon-arrow-right.svg"
              alt="OLX3"
              width="24"
              height="24"
            />
            <S.TextBack>{i18n.backText}</S.TextBack>
          </S.Box>
        </S.TopNav>
        <S.BoxPicName>
          <S.ProductImage src="https://ireland.apollo.olxcdn.com:443/v1/files/7xcg29jvke3k1-PL/image;s=512x512" />
          <S.BoxNameLocal>
            <S.ProductNameMobile>{params.productName}</S.ProductNameMobile>
            <S.ProductInfo>Warsaw- 2022-06-29 19:47</S.ProductInfo>
          </S.BoxNameLocal>
        </S.BoxPicName>
        <S.Box>
          <S.BoxTitle>{i18n.paymentDetails}</S.BoxTitle>
          <S.PriceDetail>
            <S.PriceDetailLine>
              <S.PriceDetailLineLabel>{i18n.subject}</S.PriceDetailLineLabel>
              <S.PriceDetailLineValue>
                <Price value={params.priceItem} />
              </S.PriceDetailLineValue>
            </S.PriceDetailLine>
            <S.PriceDetailLine>
              <S.PriceDetailLineLabel>
                {i18n.shippingCost}
              </S.PriceDetailLineLabel>
              <S.PriceDetailLineValue>
                <Price
                  value={params.priceDelivery}
                  hasAsterisk={!!params.priceDeliveryOriginal}
                />
                {params.priceDeliveryOriginal && (
                  <Price
                    value={params.priceDeliveryOriginal}
                    lineThrough={true}
                  />
                )}
              </S.PriceDetailLineValue>
            </S.PriceDetailLine>

            <S.PriceDetailLine>
              <S.PriceDetailLineLabel>
                <S.IconInfo src="/img/icon-info.svg" width="24" height="24" />
                {i18n.service}
              </S.PriceDetailLineLabel>
              <S.PriceDetailLineValue>
                <Price value={params.priceService} />
              </S.PriceDetailLineValue>
            </S.PriceDetailLine>

            <S.PriceDetailLine>
              <S.PriceDetailLineLabel>{i18n.totalCost}</S.PriceDetailLineLabel>
              <S.PriceDetailLineValue>
                <Price value={totalPriceStr} />
                {params.priceDeliveryOriginal && (
                  <Price value={totalOriginalPriceStr} lineThrough={true} />
                )}
              </S.PriceDetailLineValue>
            </S.PriceDetailLine>
          </S.PriceDetail>
        </S.Box>
        <S.Box>
          <S.BoxTitle>{i18n.deliveryMethodsTitle}</S.BoxTitle>
          <S.BoxSubTitle>{i18n.deliveryMethodsSubTitle}</S.BoxSubTitle>
          <S.DeliveryMethodsWrapper>
            <S.DeliveryMethodBox>
              <S.DeliveryMethodBoxHeader>
                <S.DeliveryMethodTitle>Poczta Polska</S.DeliveryMethodTitle>
                <S.Logo
                  src="/img/logo-poczta-polska.svg"
                  width="42"
                  height="24"
                />
              </S.DeliveryMethodBoxHeader>
              <S.DeliveryMethodBoxContent>
                <S.DeliveryMethodBoxContentPrice>
                  <Price
                    value={params.priceDelivery}
                    hasAsterisk={!!params.priceDeliveryOriginal}
                  />
                  {params.priceDeliveryOriginal && (
                    <Price
                      value={params.priceDeliveryOriginal}
                      lineThrough={true}
                    />
                  )}
                </S.DeliveryMethodBoxContentPrice>
                <S.DeliveryMethodSubtitle>
                  {i18n.pickupOn}
                </S.DeliveryMethodSubtitle>
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
        <S.Box>
          <S.BoxTitle>{i18n.yourDataTitle}</S.BoxTitle>
        </S.Box>
        <S.Box>
          <S.BoxTitle>{i18n.paymentMethodTitle}</S.BoxTitle>
          <S.paymentMethodInfo>{i18n.paymentMethodOption1}</S.paymentMethodInfo>
          <S.paymentMethodOption>
            {i18n.paymentMethodBlik}
          </S.paymentMethodOption>
        </S.Box>
        <S.Box>
          <S.BoxTitle>{i18n.supportUkraineTitle}</S.BoxTitle>
        </S.Box>
        <S.Box>
          Secure your purchases with OLX Shipment thanks to the Protection
          Package
        </S.Box>
        <S.Box>DO YOU WANT TO RECEIVE AN INVOICE FOR THE SERVICE?</S.Box>
        <S.BoxActions>
          <button>Cancel</button>
          <button>Next</button>
        </S.BoxActions>
      </S.Content>
    </S.Wrapper>
  )
}

export default Main
