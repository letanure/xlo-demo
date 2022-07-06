import * as S from './styles'
import { languages } from './locales'

interface Props {
  languageCode: string
}

const ShoppingSecurity = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]

  return (
    <S.Box>
      <S.BoxTitle>{i18n.shoppingSecurity}</S.BoxTitle>
      <div>{i18n.shoppingSecurityText1}</div>
      <div>{i18n.shoppingSecurityText2}</div>
      <div>{i18n.shoppingSecurityText3}</div>
      <div>{i18n.shoppingSecurityText4}</div>
      <div>{i18n.shoppingSecurityText5}</div>
      <div>{i18n.shoppingSecurityText6}</div>
      <div>{i18n.shoppingSecurityText7}</div>
      <div>{i18n.shoppingSecurityText8}</div>
    </S.Box>
  )
}

export default ShoppingSecurity
