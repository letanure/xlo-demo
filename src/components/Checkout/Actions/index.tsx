import * as S from '../styles'
import * as SS from './styles'
import { languages } from '../locales'

interface Props {
  languageCode: string
}
const Actions = ({ languageCode }: Props) => {
  const i18n: Language = languages[languageCode]
  return (
    <S.BoxActions>
      <SS.ButtonCancel>{i18n.actionCancel}</SS.ButtonCancel>
      <SS.ButtonNext>{i18n.actionNext}</SS.ButtonNext>
    </S.BoxActions>
  )
}

export default Actions
