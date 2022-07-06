enum sizeOptions {
  xsmall = 'xsmall',
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
  xxlarge = 'xxlarge'
}

export type SizeOptions = `${sizeOptions}`

export type Sizes = {
  [key in SizeOptions]: string
}

const spacing = {
  xxsmall: '0.8rem',
  xsmall: '1.6rem',
  small: '2.4rem',
  medium: '3.2rem',
  large: '4.0rem',
  xlarge: '4.8rem',
  xxlarge: '5.6rem'
}

export default {
  spacing
}
