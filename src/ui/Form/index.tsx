import * as S from './styles'
import FormField from '../FormField'

interface FormFieldConfig {
  label: string
}

type FormConfig = FormFieldConfig[]

interface Props {
  formConfig: FormConfig
}

const Form = ({ formConfig }: Props) => {
  return (
    <S.Form>
      {formConfig.map((fieldConfig, index) => (
        <FormField key={index} {...fieldConfig} />
      ))}
    </S.Form>
  )
}

export default Form
