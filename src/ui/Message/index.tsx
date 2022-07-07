import * as S from './styles'

export interface Props {
  message: string
  onClose?: () => void
  onClick?: () => void
}
const Message = ({ message, onClose, onClick }: Props) => {
  const handleOnClose = () => {
    onClose && onClose()
  }
  const handleOnClick = () => {
    onClick && onClick()
  }
  return (
    <S.Wrapper onClick={handleOnClick}>
      <S.Icon src="/img/icon-warning.svg" />
      <S.Text>{message}</S.Text>
      <S.ButtonClose onClick={handleOnClose} />
    </S.Wrapper>
  )
}

export default Message
