import * as S from '../styles'
import * as SS from './styles'
import { languages } from '../locales'

interface Props {
  languageCode: string
}

const ShoppingSecurity = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]

  return (
    <S.Box>
      <SS.shoppingSecurityLabel>
        {i18n.shoppingSecurityLabel}
      </SS.shoppingSecurityLabel>
      <S.BoxTitle>{i18n.shoppingSecurity}</S.BoxTitle>
      <SS.shoppingSecuritySubTitle>
        <SS.Icon src="/img/icon-security.svg" width="36" height="36" />
        {i18n.shoppingSecuritySubTitle}
      </SS.shoppingSecuritySubTitle>
      <SS.shoppingSecurityText>
        {i18n.shoppingSecurityText1}
        <SS.shoppingSecurityTextBold>
          {i18n.shoppingSecurityText2}
        </SS.shoppingSecurityTextBold>
      </SS.shoppingSecurityText>
      <SS.shoppingSecurityText>
        <SS.IconCheck src="/img/icon-check.svg" width="16" height="16" />
        {i18n.shoppingSecurityText3}
      </SS.shoppingSecurityText>
      <SS.shoppingSecurityText>
        <SS.IconCheck src="/img/icon-check.svg" width="16" height="16" />
        {i18n.shoppingSecurityText4}
      </SS.shoppingSecurityText>
      <SS.shoppingSecurityTextListItem>
        • {i18n.shoppingSecurityText5}
      </SS.shoppingSecurityTextListItem>
      <SS.shoppingSecurityTextListItem>
        • {i18n.shoppingSecurityText6}
      </SS.shoppingSecurityTextListItem>
      <SS.shoppingSecurityTextSmall>
        {i18n.shoppingSecurityText7}
        <SS.shoppingSecurityTextSmallLink>
          {i18n.shoppingSecurityText8}
        </SS.shoppingSecurityTextSmallLink>
      </SS.shoppingSecurityTextSmall>
    </S.Box>
  )
}

export default ShoppingSecurity
