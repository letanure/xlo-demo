import { useRef, useEffect, useState, useCallback } from 'react'
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
  ref: React.RefObject<HTMLInputElement>
}

export interface Props {
  label: string
  name: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number'
  validationRules?: ValidationRules
  onChange: (data: FieldData) => void
  languageCode: string
  forceValidate?: boolean
}
const FormField = ({
  label,
  name,
  placeholder = '',
  type = 'text',
  validationRules = {},
  onChange,
  languageCode,
  forceValidate = false
}: Props) => {
  const ref = useRef(null)
  const i18n: Language = languages[languageCode]
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [fieldData, setFieldData] = useState<FieldData>({
    name: name,
    value: '',
    valid: false,
    touched: false,
    changed: false,
    ref: ref
  })

  useEffect(() => {
    onChange(fieldData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldData])

  const validate = useCallback(
    (value: string) => {
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
    },
    [i18n, validationRules]
  )

  useEffect(() => {
    if (forceValidate) {
      validate('')
    }
  }, [forceValidate, validate])

  const handleOnChange = (newValue: string) => {
    setFieldData({
      name: name,
      value: newValue,
      valid: validate(newValue),
      touched: true,
      changed: newValue !== '',
      ref: ref
    })
  }

  return (
    <S.WrapperField className={`FormField-${name}`}>
      <S.Label>
        {label}
        {validationRules.required && <span>*</span>}
      </S.Label>
      <S.Input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e.target.value)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hasError={!fieldData.valid && errorMessage}
        isValid={fieldData.valid}
      />
      {!fieldData.valid && errorMessage && (
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      )}
    </S.WrapperField>
  )
}

export default FormField