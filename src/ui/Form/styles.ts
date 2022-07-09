import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Form = styled.form`
  ${() => css`
    width: 100%;
    ${media.greaterThan('medium')`
      display: flex;
      column-gap: 36px;
      flex-wrap: wrap;
      row-gap: 16px;
      label{
        width: calc(50% - 36px);
      }
      .FormField-apartmentNumber{
        [class*="__Label"]{
          height: 36px;
        }
      }
      .FormField-street{
        [class*="__Label"]{
          padding-top: calc(42px - 24px);
        }
      }
      .FormField-houseNumber{
        width: calc(25% - 36px);
        [class*="__Label"]{
          padding-top: calc(42px - 24px);
        }

      }
      .FormField-apartmentNumber{
        width: calc(25% - 36px);

      }
    `}
  `}
`
