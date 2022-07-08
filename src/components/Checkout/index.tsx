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
import ConfigureParams from './ConfigureParams'

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
  hideOnClickAnywhere?: boolean
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
    language: 'pl',
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
    hideOnClickAnywhere: false,
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
        'hideOnClickAnywhere',
        'hideOnScroll'
      ].includes(key)
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      queryParams[key] = router.query[key] === 'true'
    }
    if (['hideAfterXseconds'].includes(key)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      queryParams[key] = parseInt(router.query[key])
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      queryParams[key] = router.query[key] as string
    }
  }

  const params: Params = {
    ...defaultParams,
    ...queryParams
  }

  const hideOnClickAnywhere = () => {
    setTimeout(function () {
      document.body.addEventListener(
        'click',
        () => {
          setMessageClosed(true)
        },
        { once: true }
      )
    }, 400)
  }

  // hideAfterXseconds
  const hideAfterXseconds = () => {
    if (params.hideAfterXseconds && params.hideAfterXseconds > 0) {
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
    params.hideOnClickAnywhere && hideOnClickAnywhere()
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
        <S.WrapperColumns>
          <S.ColumnsRight>
            <ConfigureParams />
            <ProductInfo productName={params.productName} />
            <PaymentDetails
              languageCode={languageCode}
              priceItem={params.priceItem}
              priceService={params.priceService}
              priceDelivery={params.priceDelivery}
              priceDeliveryOriginal={params.priceDeliveryOriginal || '0'}
            />
          </S.ColumnsRight>
          <S.ColumnsLeft>
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
            {formSubmited &&
              !formValid &&
              params.messageShow &&
              !messageClosed && (
                <Message
                  message={i18n.formErrorGeneric}
                  onClickClose={handleMessageClickClose}
                  onClick={handleMessageClick}
                  hasCloseButton={params.messageHasCloseButton as boolean}
                />
              )}
            <Actions languageCode={languageCode} onNext={handleOnNext} />
          </S.ColumnsLeft>
        </S.WrapperColumns>
      </S.Content>
    </S.Wrapper>
  )
}

export default Checkout
