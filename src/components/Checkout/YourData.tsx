import * as S from './styles'
import Form, { Props as FormProps } from '../../ui/Form'
import { languages } from './locales'

interface Props {
  languageCode: string
}

const YourData = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]

  const formConfig: FormProps['config'] = [
    {
      label: i18n.formFirstName,
      validationRules: {
        required: true,
        min: 2,
        max: 30
      }
    },
    {
      label: i18n.formLastName,
      validationRules: {
        required: true,
        min: 2,
        max: 30
      }
    },
    {
      label: i18n.formEmail,
      validationRules: {
        required: true,
        email: true
      }
    },
    {
      label: i18n.formPhone,
      placeholder: '+48',
      validationRules: {
        required: true,
        phone: true
      }
    },
    // {
    //   label: i18n.formAddress,
    //   required: true
    // },
    {
      label: i18n.formStreet,
      validationRules: {
        required: true,
        min: 2,
        max: 30
      }
    },
    {
      label: i18n.formHouseNumber,
      type: 'number',
      validationRules: {
        required: true,
        min: 1,
        max: 5
      }
    },
    {
      label: i18n.formApartmentNumber,
      validationRules: {
        required: true,
        min: 1,
        max: 5
      }
    },
    {
      label: i18n.formPostalCode,
      validationRules: {
        required: true,
        postalCode: true
      }
    },
    {
      label: i18n.formCity,
      validationRules: {
        required: true,
        min: 2,
        max: 20
      }
    }
  ]

  return (
    <S.Box>
      <S.BoxTitle>{i18n.yourDataTitle}</S.BoxTitle>
      <Form config={formConfig} />
    </S.Box>
  )
}

export default YourData
