import { render, screen } from '@testing-library/react'

import PriceDetails from '.'

describe('<PriceDetails />', () => {
  it.skip('should render something', () => {
    const { container } = render(<PriceDetails />)

    expect(
      screen.getByRole('heading', { name: /PriceDetails/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
