import * as S from './styles'

export type TagProps = {
  text: string | number
}

const Tag = ({ text }: TagProps) => <S.Wrapper text={text}>{text}</S.Wrapper>

export default Tag
