import * as S from './styles'

type IconNames = 'info'

export type IconProps = {
  name: IconNames
  width?: number
}

const Icon = ({ name, width = 20 }: IconProps) => (
  <S.Wrapper width={width} name={name}></S.Wrapper>
)

export default Icon
