import * as S from './styles'
import { languages } from './locales'

interface Props {
  languageCode: string
}

const SupportUkraine = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]

  return (
    <S.Box>
      <S.BoxTitle>{i18n.supportUkraineTitle}</S.BoxTitle>
    </S.Box>
  )
}

export default SupportUkraine
