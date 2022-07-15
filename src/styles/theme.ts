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

enum colorTypes {
  primary = 'primary',
  secondary = 'secondary',
  positive = 'positive',
  warning = 'warning',
  negative = 'negative',
  info = 'info',
  light = 'light',
  dark = 'dark'
}
export type ColorTypes = `${colorTypes}`

type ColorDefinition = {
  c050: string
  c100: string
  c200: string
  c300: string
  c400: string
  c500: string
  c600: string
  c700: string
  c800: string
  c900: string
  lightFrom: number
}

type ColorGroup = {
  [key: string]: ColorDefinition
}

const grid = {
  container: '130rem',
  gutter: '3.2rem'
}

const fontSizes: Sizes = {
  xsmall: '1.2rem',
  small: '1.4rem',
  medium: '1.6rem',
  large: '1.8rem',
  xlarge: '2.0rem',
  xxlarge: '2.8rem'
}

const font = {
  family: {
    heading: {
      local: true,
      name: 'Geomanist Book',
      src: '/fonts/geomanist-book-webfont.woff2',
      weight: 400
    },
    body: {
      local: true,
      name: 'Geomanist Regular',
      src: '/fonts/geomanist-regular-webfont.woff2',
      weight: 400
    }
  },
  size: fontSizes,
  weight: {
    light: 300,
    normal: 400,
    bold: 600
  }
}

const color_black: ColorDefinition = {
  c050: '#383838',
  c100: '#363636',
  c200: '#333333',
  c300: '#2e2e2e',
  c400: '#2c2c2c',
  c500: '#272727',
  c600: '#252525',
  c700: '#232323',
  c800: '#1e1e1e',
  c900: '#121212',
  lightFrom: 0
}

const color: ColorGroup = {
  black: color_black
}

// Hover states are  one shade lighter on dark background, and one shade darker on light background.
const color_semantic = {
  elevation: {
    e00: { bg: color.black.c050 },
    e01: { bg: color.black.c100 },
    e02: { bg: color.black.c200 },
    e03: { bg: color.black.c300 },
    e04: { bg: color.black.c400 },
    e05: { bg: color.black.c500 },
    e06: { bg: color.black.c600 },
    e07: { bg: color.black.c700 },
    e08: { bg: color.black.c800 },
    e09: { bg: color.black.c900 }
  },
  text: {
    body: {
      default: { bg: color.black.c900 },
      subdued: { bg: color.black.c600 },
      link: { bg: color.black.c500 }
    }
  },
  primary: {
    disabled: {
      value: color.black.c100,
      inverse: color.black.c900
    },
    disabledPressed: {
      value: color.black.c200,
      inverse: color.black.c900
    },
    hover: {
      value: color.black.c300,
      inverse: color.black.c900
    },
    normal: {
      value: color.black.c400,
      inverse: color.black.c100
    },
    active: {
      value: color.black.c500,
      inverse: color.black.c100
    }
  }
}

const border = {
  width: {
    thin: '1px',
    thick: '2px'
  },
  radius: {
    small: '0.2rem',
    medium: '0.4rem',
    large: '0.6rem'
  }
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
  border,
  color: color_semantic,
  font,
  grid,
  spacing
}
