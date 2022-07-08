import { useState } from 'react'
import {} from 'next/router'
import * as S from './styles'
import Form, { Props as FormProps, FormData } from '../../../ui/Form/'

const ConfigureParams = () => {
  const [url, setUrl] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const formConfig: FormProps['config'] = [
    {
      name: 'language',
      languageCode: 'en',
      label: 'Language',
      placeholder: 'pl / en'
    },
    {
      name: 'productName',
      languageCode: 'en',
      label: 'Product name'
    },
    {
      name: 'productImage',
      languageCode: 'en',
      label: 'Product image'
    },
    {
      name: 'productCityDate',
      languageCode: 'en',
      label: 'Product city / date',
      placeholder: 'Warszawa- 2022-06-29 19:47'
    },
    {
      name: 'priceItem',
      languageCode: 'en',
      type: 'number',
      label: 'Price'
    },
    {
      name: 'priceDelivery',
      languageCode: 'en',
      type: 'number',
      label: 'Price delivery'
    },
    {
      name: 'priceDeliveryOriginal',
      languageCode: 'en',
      type: 'number',
      label: 'Price delivery original'
    },
    {
      name: 'priceService',
      languageCode: 'en',
      type: 'number',
      label: 'Price service'
    },
    {
      name: 'messageShow',
      languageCode: 'en',
      label: 'Show error message?',
      placeholder: 'true / false'
    },
    {
      name: 'messageHasCloseButton',
      languageCode: 'en',
      label: 'Error message has close button?',
      placeholder: 'true / false'
    },
    {
      name: 'scrollToError',
      languageCode: 'en',
      placeholder: 'true / false',
      label: 'Scroll to first input with error?'
    },
    {
      name: 'focusError',
      languageCode: 'en',
      placeholder: 'true / false',
      label: 'Focus the first input with error?'
    },
    {
      name: 'hideOnScroll',
      languageCode: 'en',
      placeholder: 'true / false',
      label: 'Hide error message on scroll?'
    },
    {
      name: 'hideOnClickAnywhere',
      languageCode: 'en',
      placeholder: 'true / false',
      label: 'Hide error message on click anywhere?'
    },
    {
      name: 'hideAfterXseconds',
      type: 'number',
      languageCode: 'en',
      placeholder: '0 to disable or X seconds',
      label: 'Hide error message after X seconds?'
    }
  ]

  if (process.browser) {
    document.addEventListener('keydown', function (event) {
      if (event.key === '?') {
        setVisible(true)
      }
      if (event.key === 'Escape') {
        setVisible(false)
      }
    })
  }

  const handleOnChange = (formData: FormData) => {
    const newParamsString = formData.fieldData
      .filter(({ value }) => value !== '')
      .map(({ name, value }) => `${name}=${value}`)
      .join('&')
    setUrl(`${window.location.pathname}?${newParamsString}`)
  }

  return (
    <>
      {visible && (
        <S.Box>
          <S.BoxTitle>Configuration</S.BoxTitle>
          <S.BoxContent>
            <Form
              config={formConfig}
              onChange={handleOnChange}
              languageCode="en"
            />
          </S.BoxContent>
          <S.BoxFooter>
            <a href={url} target="_blank" rel="noreferrer">
              Open new URL
            </a>
          </S.BoxFooter>
        </S.Box>
      )}
    </>
  )
}

export default ConfigureParams
