import { useEffect, useState } from 'react'
import * as S from './styles'
import FormField, { Props as FieldConfig, FieldData } from '../FormField'

export type FormData = {
  valid: boolean
  fieldData: FieldData[]
}

export interface Props {
  config: Omit<FieldConfig, 'onChange'>[]
  onChange: (data: FormData) => void
  languageCode: string
}

const Form = ({ config, onChange, languageCode }: Props) => {
  const [formData, setFormData] = useState<FieldData[]>([])

  useEffect(() => {
    onChange({
      valid: formData.every((field) => field.valid),
      fieldData: formData
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData])

  const handleOnChange = (newData: FieldData) => {
    const dataExists = formData.find((data) => data.name === newData.name)
    if (dataExists) {
      setFormData((prevFormData) => {
        return prevFormData.map((prevData) => {
          if (prevData.name === newData.name) {
            return newData
          }
          return prevData
        })
      })
    } else {
      setFormData((prevFormData) => [...prevFormData, newData])
    }
  }
  return (
    <S.Form>
      {config.map((fieldConfig, index) => (
        <FormField
          key={index}
          {...fieldConfig}
          onChange={handleOnChange}
          languageCode={languageCode}
        />
      ))}
    </S.Form>
  )
}

export default Form
