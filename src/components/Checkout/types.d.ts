type LanguageCodes = 'en' | 'pl'

interface Language {
  [key: string]: string
}

interface Languages {
  [key: string]: Language
}

interface PriceProps {
  value: string
  lineThrough?: boolean
  hasAsterisk?: boolean
}
