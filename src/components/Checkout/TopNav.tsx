import * as S from './styles'
import { languages } from './locales'

interface Props {
  languageCode: string
}
const TopNav = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]
  return (
    <S.TopNav>
      <S.Box>
        <S.IconBack
          src="/img/icon-arrow-right.svg"
          alt="OLX3"
          width="24"
          height="24"
        />
        <S.TextBack>{i18n.backText}</S.TextBack>
      </S.Box>
    </S.TopNav>
  )
}

export default TopNav
