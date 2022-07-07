import * as S from '../styles'
import * as SS from './styles'
import { languages } from '../locales'

interface Props {
  languageCode: string
  onCancel?: () => void
  onNext: () => void
}
const Actions = ({ languageCode, onCancel, onNext }: Props) => {
  const i18n: Language = languages[languageCode]
  const handleCancel = () => {
    onCancel && onCancel()
  }
  const handleNext = () => {
    onNext()
  }
  return (
    <S.BoxActions>
      <SS.ButtonCancel onClick={handleCancel}>
        {i18n.actionCancel}
      </SS.ButtonCancel>
      <SS.ButtonNext onClick={handleNext}>{i18n.actionNext}</SS.ButtonNext>
    </S.BoxActions>
  )
}

export default Actions
