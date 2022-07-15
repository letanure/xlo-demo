import * as S from './styles'

// ISO 4217 Currency Code
type CurrencyCode = 'PLN' | 'RON'

export type PriceProps = {
  amount: number
  currency: CurrencyCode
}

type LanguageCodesObject = {
  [key in CurrencyCode]: string
}

const languageCodes: LanguageCodesObject = {
  PLN: 'pl-PL',
  RON: 'ro-RO'
}

const Price = ({ amount, currency }: PriceProps) => {
  const formatedPrice = new Intl.NumberFormat(
    languageCodes[currency as CurrencyCode],
    {
      style: 'currency',
      currency: currency
    }
  ).format((amount as number) / 100)

  return <S.Wrapper>{formatedPrice}</S.Wrapper>
}

export default Price
