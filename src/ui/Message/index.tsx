import * as S from './styles'

export interface Props {
  message: string
  onClickClose?: () => void
  onClick?: () => void
}
const Message = ({ message, onClickClose, onClick }: Props) => {
  const handleOnClickClose = () => {
    onClickClose && onClickClose()
  }
  const handleOnClick = () => {
    onClick && onClick()
  }
  return (
    <S.Wrapper onClick={handleOnClick}>
      <S.Icon src="/img/icon-warning.svg" />
      <S.Text>{message}</S.Text>
      <S.ButtonClose onClick={handleOnClickClose} />
    </S.Wrapper>
  )
}

export default Message
