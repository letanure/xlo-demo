import * as S from './styles'
import { languages } from './locales'

interface Props {
  languageCode: string
}

const PaymentMethod = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]

  return (
    <S.Box>
      <S.BoxTitle>{i18n.paymentMethodTitle}</S.BoxTitle>
      <S.paymentMethodInfo>{i18n.paymentMethodOption1}</S.paymentMethodInfo>
      <S.paymentMethodOption>{i18n.paymentMethodBlik}</S.paymentMethodOption>
    </S.Box>
  )
}

export default PaymentMethod
