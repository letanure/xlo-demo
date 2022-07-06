import { useRouter } from 'next/router'
import * as S from './styles'
import Actions from './Actions'
import DeliveryMethods from './DeliveryMethods'
import Header from '../../ui/Header'
import Invoice from './Invoice'
import PaymentDetails from './PaymentDetails'
import PaymentMethod from './PaymentMethod'
import ProductInfo from './ProductInfo'
import ShoppingSecurity from './ShoppingSecurity'
import SupportUkraine from './SupportUkraine'
import TopNav from './TopNav'
import YourData from './YourData'

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

  const languageCode = params.language

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.ProductName>{params.productName}</S.ProductName>
        <TopNav languageCode={languageCode} />
        <ProductInfo productName={params.productName} />
        <PaymentDetails
          languageCode={languageCode}
          priceItem={params.priceItem}
          priceService={params.priceService}
          priceDelivery={params.priceDelivery}
          priceDeliveryOriginal={params.priceDeliveryOriginal || '0'}
        />
        <DeliveryMethods
          languageCode={languageCode}
          priceDelivery={params.priceDelivery}
          priceDeliveryOriginal={params.priceDeliveryOriginal || '0'}
        />
        <YourData languageCode={languageCode} />
        <PaymentMethod languageCode={languageCode} />
        <SupportUkraine languageCode={languageCode} />
        <ShoppingSecurity languageCode={languageCode} />
        <Invoice languageCode={languageCode} />
        <Actions languageCode={languageCode} />
      </S.Content>
    </S.Wrapper>
  )
}

export default Main
