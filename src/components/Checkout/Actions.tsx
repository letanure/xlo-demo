import * as S from './styles'
import { languages } from './locales'

interface Props {
  languageCode: string
}
const Actions = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]
  return (
    <S.BoxActions>
      <button>{i18n.actionCancel}</button>
      <button>{i18n.actionNext}</button>
    </S.BoxActions>
  )
}

export default Actions
