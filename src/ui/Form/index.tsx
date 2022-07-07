import * as S from './styles'
import FormField, { Props as FieldConfig } from '../FormField'

export interface Props {
  config: FieldConfig[]
}

const Form = ({ config }: Props) => {
  return (
    <S.Form>
      {config.map((fieldConfig, index) => (
        <FormField key={index} {...fieldConfig} />
      ))}
    </S.Form>
  )
}

export default Form
