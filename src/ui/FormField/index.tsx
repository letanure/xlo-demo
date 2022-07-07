import * as S from './styles'

interface Props {
  label: string
  placeholder?: string
  required?: boolean
  errorMessage?: string | null
  type?: 'text' | 'email' | 'password' | 'number'
}
const FormField = ({
  label,
  placeholder = '',
  type = 'text',
  errorMessage = null,
  required = false
}: Props) => {
  return (
    <S.WrapperField>
      <S.Label>
        {label}
        {required && <span>*</span>}
      </S.Label>
      <S.Input type={type} placeholder={placeholder} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.WrapperField>
  )
}

export default FormField
