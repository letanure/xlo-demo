import * as S from './styles'

interface Props {
  productName: string
  productImage: string
}

const ProductInfo = ({ productName, productImage }: Props) => {
  return (
    <S.BoxPicName>
      <S.ProductImage src={productImage} />
      <S.BoxNameLocal>
        <S.ProductNameMobile>{productName}</S.ProductNameMobile>
        <S.ProductInfo>Warsaw- 2022-06-29 19:47</S.ProductInfo>
      </S.BoxNameLocal>
    </S.BoxPicName>
  )
}

export default ProductInfo
