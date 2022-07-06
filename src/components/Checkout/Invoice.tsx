import * as S from './styles'
import { languages } from './locales'

interface Props {
  languageCode: string
}
const Invoice = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]
  return (
    <S.Box>
      <div>{i18n.invoiceTitle}</div>
      <div>{i18n.invoiceOption}</div>
      <div>{i18n.invoiceInfo}</div>
    </S.Box>
  )
}

export default Invoice
