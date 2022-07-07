import { useState } from 'react'
import { useRouter } from 'next/router'
import Message from '../../ui/Message'
import { FormData } from 'ui/Form'
import { languages } from './locales'
import * as S from './styles'
import Actions from './Actions'
import DeliveryMethods from './DeliveryMethods'
import Header from '../../ui/Header'
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
  showMessage?: boolean
}

const Checkout = () => {
  const [forceValidate, setForceValidate] = useState<boolean>(false)
  const [formSubmited, setFormSubmited] = useState<boolean>(false)
  const [formValid, setFormValid] = useState<boolean>(false)
  const router = useRouter()

  const defaultParams: Params = {
    productName: 'Product Name',
    language: 'en',
    priceItem: '2500',
    priceDelivery: '5',
    // priceDeliveryOriginal || 0: null, //'17.99',
    priceService: '20',
    showMessage: true
  }
  const queryParams: Partial<Params> = {}

  for (const key in router.query) {
    if (key === 'showMessage') {
      queryParams[key] = router.query[key] === 'true'
    } else {
      queryParams[key] = router.query[key] as string
    }
  }

  const params: Params = {
    ...defaultParams,
    ...queryParams
  }

  const languageCode = params.language
  const i18n: Language = languages[languageCode]

  const handleOnNext = () => {
    setForceValidate(true)
    setFormSubmited(true)
  }

  const handleOnChangeYourData = (formData: FormData) => {
    setFormValid(formData.valid)
  }

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
        <YourData
          languageCode={languageCode}
          forceValidate={forceValidate}
          onChange={handleOnChangeYourData}
        />
        <PaymentMethod languageCode={languageCode} />
        <SupportUkraine languageCode={languageCode} />
        <ShoppingSecurity languageCode={languageCode} />
        {formSubmited && !formValid && params.showMessage && (
          <Message message={i18n.formErrorGeneric} />
        )}
        <Actions languageCode={languageCode} onNext={handleOnNext} />
      </S.Content>
    </S.Wrapper>
  )
}

export default Checkout
