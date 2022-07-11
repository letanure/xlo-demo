import { useState } from 'react'
import {} from 'next/router'
import * as S from './styles'
import Form, { Props as FormProps, FormData } from '../../../ui/Form/'
import { Params as DefaultParams } from '../index'

type Props = {
  defaultParams: DefaultParams
}

const ConfigureParams = ({ defaultParams }: Props) => {
  const [url, setUrl] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const formConfig: FormProps['config'] = [
    {
      name: 'language',
      languageCode: 'en',
      label: 'Language',
      type: 'select',
      value: defaultParams.language,
      options: [
        {
          value: 'pl',
          label: 'Polish'
        },
        {
          value: 'en',
          label: 'English'
        }
      ]
    },
    {
      name: 'productName',
      value: defaultParams.productName,
      languageCode: 'en',
      label: 'Product name'
    },
    {
      name: 'productImage',
      value: defaultParams.productImage,
      languageCode: 'en',
      label: 'Product image'
    },
    {
      name: 'productCityDate',
      value: defaultParams.productCityDate,
      languageCode: 'en',
      label: 'Product city / date'
    },
    {
      name: 'priceItem',
      value: defaultParams.priceItem,
      languageCode: 'en',
      type: 'number',
      label: 'Price'
    },
    {
      name: 'priceDelivery',
      value: defaultParams.priceDelivery,
      languageCode: 'en',
      type: 'number',
      label: 'Price delivery'
    },
    {
      name: 'priceDeliveryOriginal',
      value: defaultParams.priceDeliveryOriginal,
      languageCode: 'en',
      type: 'number',
      label: 'Price delivery original'
    },
    {
      name: 'priceService',
      value: defaultParams.priceService,
      languageCode: 'en',
      type: 'number',
      label: 'Price service'
    },
    {
      name: 'messageShow',
      value: defaultParams.messageShow,
      languageCode: 'en',
      label: 'Show error message?',
      type: 'select',
      options: [
        {
          value: true,
          label: 'Yes'
        },
        {
          value: false,
          label: 'No'
        }
      ]
    },
    {
      name: 'messageHasCloseButton',
      value: defaultParams.messageHasCloseButton,
      languageCode: 'en',
      label: 'Error message has close button?',
      type: 'select',
      options: [
        {
          value: true,
          label: 'Yes'
        },
        {
          value: false,
          label: 'No'
        }
      ]
    },
    {
      name: 'scrollToError',
      value: defaultParams.scrollToError,
      languageCode: 'en',
      label: 'Scroll to first input with error?',
      type: 'select',
      options: [
        {
          value: true,
          label: 'Yes'
        },
        {
          value: false,
          label: 'No'
        }
      ]
    },
    {
      name: 'focusError',
      value: defaultParams.focusError,
      languageCode: 'en',
      label: 'Focus the first input with error?',
      type: 'select',
      options: [
        {
          value: true,
          label: 'Yes'
        },
        {
          value: false,
          label: 'No'
        }
      ]
    },
    {
      name: 'hideOnScroll',
      value: defaultParams.hideOnScroll,
      languageCode: 'en',
      label: 'Hide error message on scroll?',
      type: 'select',
      options: [
        {
          value: true,
          label: 'Yes'
        },
        {
          value: false,
          label: 'No'
        }
      ]
    },
    {
      name: 'hideOnClickAnywhere',
      value: defaultParams.hideOnClickAnywhere,
      languageCode: 'en',
      label: 'Hide error message on click anywhere?',
      type: 'select',
      options: [
        {
          value: true,
          label: 'Yes'
        },
        {
          value: false,
          label: 'No'
        }
      ]
    },
    {
      name: 'hideAfterXseconds',
      value: defaultParams.hideAfterXseconds,
      type: 'number',
      languageCode: 'en',
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
