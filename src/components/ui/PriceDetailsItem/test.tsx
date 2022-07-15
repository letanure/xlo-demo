import { render, screen } from '@testing-library/react'

import PriceDetailsItem from '.'

describe('<PriceDetailsItem />', () => {
  it.skip('should render something', () => {
    const { container } = render(<PriceDetailsItem />)

    expect(
      screen.getByRole('heading', { name: /PriceDetailsItem/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
