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
  messageShow?: boolean
  messageCloseOnClick?: boolean
  messageHasCloseButton?: boolean
  scrollToError?: boolean
  focusError?: boolean
  hideOnScroll?: boolean
  hideAfterXseconds?: number
}

const Checkout = () => {
  const [forceValidate, setForceValidate] = useState<boolean>(false)
  const [formSubmited, setFormSubmited] = useState<boolean>(false)
  const [formValid, setFormValid] = useState<boolean>(false)
  const [messageClosed, setMessageClosed] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>()
  const router = useRouter()

  // fadein/out

  const defaultParams: Params = {
    productName: 'Product Name',
    language: 'en',
    priceItem: '2500',
    priceDelivery: '5',
    // priceDeliveryOriginal || 0: null, //'17.99',
    priceService: '20',
    messageShow: true,
    messageCloseOnClick: false,
    messageHasCloseButton: true,
    scrollToError: true,
    focusError: true,
    hideOnScroll: false,
    hideAfterXseconds: 0
  }
  const queryParams: Partial<Params> = {}

  for (const key in router.query) {
    if (
      [
        'messageCloseOnClick',
        'messageShow',
        'messageHasCloseButton',
        'scrollToError',
        'hideOnScroll'
      ].includes(key)
    ) {
      queryParams[key] = router.query[key] === 'true'
    }
    if (['hideAfterXseconds'].includes(key)) {
      queryParams[key] = parseInt(router.query[key])
    } else {
      queryParams[key] = router.query[key] as string
    }
  }

  const params: Params = {
    ...defaultParams,
    ...queryParams
  }

  // hideAfterXseconds
  const hideAfterXseconds = () => {
    if (params.hideAfterXseconds > 0) {
      setTimeout(function () {
        setMessageClosed(true)
      }, params.hideAfterXseconds * 1000)
    }
  }

  const hideOnScroll = () => {
    let scrollTimeout: NodeJS.Timeout
    addEventListener('scroll', function () {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(function () {
        setMessageClosed(true)
      }, 200)
    })
  }

  const languageCode = params.language
  const i18n: Language = languages[languageCode]

  const handleOnNext = () => {
    setMessageClosed(false)
    setForceValidate(true)
    setFormSubmited(true)
    params.scrollToError && scrollToFirstError()
    params.focusError && focusFirstError(params.scrollToError)
    setTimeout(function () {
      params.hideOnScroll && hideOnScroll()
    }, 400)
    hideAfterXseconds()
  }

  const focusFirstError = (waitScroll = false) => {
    let scrollTimeout: NodeJS.Timeout
    const firstInvalidField = formData?.fieldData.find((field) => !field.valid)
    if (waitScroll) {
      addEventListener('scroll', function () {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(function () {
          if (firstInvalidField?.ref.current) {
            firstInvalidField.ref.current.focus()
          }
        }, 200)
      })
    } else {
      if (firstInvalidField?.ref.current) {
        firstInvalidField.ref.current.focus({ preventScroll: false })
      }
    }
  }

  const scrollToFirstError = () => {
    const firstInvalidField = formData?.fieldData.find((field) => !field.valid)
    if (firstInvalidField?.ref.current) {
      firstInvalidField.ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  const handleOnChangeYourData = (newFormData: FormData) => {
    setFormData(newFormData)
    setFormValid(newFormData.valid)
  }
  const handleMessageClickClose = () => {
    setMessageClosed(true)
  }
  const handleMessageClick = () => {
    params.messageCloseOnClick && setMessageClosed(true)
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
        {formSubmited && !formValid && params.messageShow && !messageClosed && (
          <Message
            message={i18n.formErrorGeneric}
            onClickClose={handleMessageClickClose}
            onClick={handleMessageClick}
            hasCloseButton={params.messageHasCloseButton as boolean}
          />
        )}
        <Actions languageCode={languageCode} onNext={handleOnNext} />
      </S.Content>
    </S.Wrapper>
  )
}

export default Checkout
