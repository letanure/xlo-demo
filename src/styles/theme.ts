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
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '20px',
  xxlarge: '22px'
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
  lineHeight: {
    xsmall: '14px',
    small: '16px',
    medium: '18px',
    large: '20px',
    xlarge: '22px',
    xxlarge: '24px'
  },
  weight: {
    light: 300,
    normal: 400,
    bold1: 500,
    bold2: 600
  }
}

const color_black: ColorDefinition = {
  c050: '#406367',
  c100: '#7F9799',
  c200: '#406367',
  c300: '#406367',
  c400: '#002F34',
  c500: '#002F34',
  c600: '#002F34',
  c700: '#002F34',
  c800: '#002F34',
  c900: '#002F34',
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
  xxxsmall: '8px',
  xxsmall: '10px',
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '20px',
  xxlarge: '22px'
}

export default {
  border,
  color: color_semantic,
  font,
  grid,
  spacing
}
