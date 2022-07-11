import * as S from './styles'

export interface Props {
  message: string
  hasCloseButton: boolean
  onClickClose?: () => void
  onClick?: () => void
}
const Message = ({
  message,
  hasCloseButton = true,
  onClickClose,
  onClick
}: Props) => {
  const handleOnClickClose = () => {
    onClickClose && onClickClose()
  }
  const handleOnClick = () => {
    onClick && onClick()
  }
  return (
    <S.Wrapper onClick={handleOnClick} hasCloseButton={hasCloseButton}>
      <S.Icon src="/img/icon-warning.svg" />
      <S.Text>{message}</S.Text>
      {hasCloseButton && <S.ButtonClose onClick={handleOnClickClose} />}
    </S.Wrapper>
  )
}

export default Message
