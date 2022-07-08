import * as S from './styles'

interface Props {
  productName: string
  productImage: string
  productCityDate: string
}

const ProductInfo = ({ productName, productImage, productCityDate }: Props) => {
  return (
    <S.BoxPicName>
      <S.ProductImage src={productImage} />
      <S.BoxNameLocal>
        <S.ProductNameMobile>{productName}</S.ProductNameMobile>
        <S.ProductInfo>{productCityDate}</S.ProductInfo>
      </S.BoxNameLocal>
    </S.BoxPicName>
  )
}

export default ProductInfo
