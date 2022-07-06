import * as S from './styles'

interface Props {
  productName: string
}

const ProductInfo = ({ productName }: Props) => {
  return (
    <S.BoxPicName>
      <S.ProductImage src="https://ireland.apollo.olxcdn.com:443/v1/files/7xcg29jvke3k1-PL/image;s=512x512" />
      <S.BoxNameLocal>
        <S.ProductNameMobile>{productName}</S.ProductNameMobile>
        <S.ProductInfo>Warsaw- 2022-06-29 19:47</S.ProductInfo>
      </S.BoxNameLocal>
    </S.BoxPicName>
  )
}

export default ProductInfo
