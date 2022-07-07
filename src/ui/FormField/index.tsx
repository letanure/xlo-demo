import * as S from './styles'

interface ValidationRules {
  min?: number
  max?: number
  required?: boolean
  email?: boolean
  phone?: boolean
  postalCode?: boolean
}

export interface Props {
  label: string
  placeholder?: string
  errorMessage?: string | null
  type?: 'text' | 'email' | 'password' | 'number'
  validationRules?: ValidationRules
}
const FormField = ({
  label,
  placeholder = '',
  type = 'text',
  errorMessage = null,
  validationRules = {}
}: Props) => {
  console.log(validationRules)
  return (
    <S.WrapperField>
      <S.Label>
        {label}
        {validationRules.required && <span>*</span>}
      </S.Label>
      <S.Input type={type} placeholder={placeholder} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.WrapperField>
  )
}

export default FormField
