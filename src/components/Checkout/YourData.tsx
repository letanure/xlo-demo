import * as S from './styles'
import { languages } from './locales'

interface Props {
  languageCode: string
}

const YourData = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]

  return (
    <S.Box>
      <S.BoxTitle>{i18n.yourDataTitle}</S.BoxTitle>
    </S.Box>
  )
}

export default YourData
