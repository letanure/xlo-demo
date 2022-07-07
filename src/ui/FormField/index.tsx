import { useEffect, useState } from 'react'
import * as S from './styles'
import { languages } from '../../components/Checkout/locales'

interface ValidationRules {
  min?: number
  max?: number
  required?: boolean
  email?: boolean
  phone?: boolean
  postalCode?: boolean
}

export type FieldData = {
  name: string
  value: string | undefined
  valid: boolean
  touched: boolean
  changed: boolean
}

export interface Props {
  label: string
  name: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number'
  validationRules?: ValidationRules
  onChange: (data: FieldData) => void
  languageCode: string
}
const FormField = ({
  label,
  name,
  placeholder = '',
  type = 'text',
  validationRules = {},
  onChange,
  languageCode
}: Props) => {
  const i18n: Language = languages[languageCode]
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [fieldData, setFieldData] = useState<FieldData>({
    name: name,
    value: '',
    valid: false,
    touched: false,
    changed: false
  })

  useEffect(() => {
    onChange(fieldData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldData])

  const validate = (value: string) => {
    const { min, max, required, email, phone, postalCode } = validationRules
    if (required && !value) {
      setErrorMessage(i18n.formErrorRequired)
      return false
    }
    if (min && value.length < min) {
      setErrorMessage(i18n.formErrorMin.replace('XX', `${min}`))
      return false
    }
    if (max && value.length > max) {
      setErrorMessage(i18n.formErrorMax.replace('XX', `${max}`))
      return false
    }
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      setErrorMessage(i18n.formErrorEmailFormat)
      return false
    }
    if (phone && !/^\+?\d{10,15}$/i.test(value)) {
      setErrorMessage(i18n.formErrorPhone)
      return false
    }
    if (postalCode && !/^\d{2}-\d{3}$/i.test(value)) {
      setErrorMessage(i18n.formErrorPostalCode)
      return false
    }
    return true
  }

  const handleOnChange = (newValue: string) => {
    setFieldData({
      name: name,
      value: newValue,
      valid: validate(newValue),
      touched: true,
      changed: newValue !== ''
    })
  }
  return (
    <S.WrapperField>
      <S.Label>
        {label}
        {validationRules.required && <span>*</span>}
      </S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e.target.value)}
        hasError={!fieldData.valid && errorMessage}
      />
      {!fieldData.valid && errorMessage && (
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      )}
    </S.WrapperField>
  )
}

export default FormField
