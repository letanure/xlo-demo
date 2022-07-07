import * as S from './styles'
import Form from '../../ui/Form'
import { languages } from './locales'

interface Props {
  languageCode: string
}

const YourData = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]

  const formConfig = [
    {
      label: i18n.formFirstName,
      required: true
    },
    {
      label: i18n.formLastName,
      required: true
    },
    {
      label: i18n.formEmail,
      required: true
    },
    {
      label: i18n.formPhone,
      placeholder: '+48',
      required: true
    },
    // {
    //   label: i18n.formAddress,
    //   required: true
    // },
    {
      label: i18n.formStreet,
      required: true
    },
    {
      label: i18n.formHouseNumber,
      required: true
    },
    {
      label: i18n.formApartmentNumber,
      required: true
    },
    {
      label: i18n.formPostalCode,
      required: true
    },
    {
      label: i18n.formCity,
      required: true
    }
  ]

  return (
    <S.Box>
      <S.BoxTitle>{i18n.yourDataTitle}</S.BoxTitle>
      <Form formConfig={formConfig} />
    </S.Box>
  )
}

export default YourData
