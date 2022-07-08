import * as S from './styles'
import Form, { Props as FormProps, FormData } from '../../ui/Form'
import { languages } from './locales'

interface Props {
  languageCode: string
  forceValidate?: boolean
  onChange: (data: FormData) => void
}

const YourData = ({ languageCode, forceValidate = false, onChange }: Props) => {
  const i18n: Language = languages[languageCode]

  const formConfig: FormProps['config'] = [
    {
      name: 'firstName',
      languageCode: 'pl',
      label: i18n.formFirstName,
      validationRules: {
        required: true,
        max: 30
      }
    },
    {
      name: 'lastName',
      languageCode: 'pl',
      label: i18n.formLastName,
      validationRules: {
        required: true,
        max: 30
      }
    },
    {
      name: 'email',
      languageCode: 'pl',
      label: i18n.formEmail,
      validationRules: {
        required: true,
        email: true
      }
    },
    {
      name: 'phone',
      languageCode: 'pl',
      label: i18n.formPhone,
      placeholder: '+48',
      validationRules: {
        required: true,
        phone: true
      }
    },
    // {
    //   name: 'address',
    //   languageCode: 'pl',
    //   label: i18n.formAddress,
    //   required: true
    // },
    {
      name: 'street',
      languageCode: 'pl',
      label: i18n.formStreet,
      validationRules: {
        required: true,
        max: 30
      }
    },
    {
      name: 'houseNumber',
      languageCode: 'pl',
      label: i18n.formHouseNumber,
      validationRules: {
        required: true,
        max: 5
      }
    },
    {
      name: 'apartmentNumber',
      languageCode: 'pl',
      label: i18n.formApartmentNumber,
      validationRules: {
        required: true,
        max: 5
      }
    },
    {
      name: 'postalCode',
      languageCode: 'pl',
      label: i18n.formPostalCode,
      validationRules: {
        required: true,
        postalCode: true
      }
    },
    {
      name: 'city',
      languageCode: 'pl',
      label: i18n.formCity,
      validationRules: {
        required: true,
        max: 20
      }
    }
  ]

  const handleOnChange = (formData: FormData) => {
    onChange(formData)
  }

  return (
    <S.Box>
      <S.BoxTitle>{i18n.yourDataTitle}</S.BoxTitle>
      <Form
        config={formConfig}
        onChange={handleOnChange}
        languageCode={languageCode}
        forceValidate={forceValidate}
      />
    </S.Box>
  )
}

export default YourData
