import { render, screen } from '@testing-library/react'

import BuyWithDelivery from '.'

describe('<BuyWithDelivery />', () => {
  it('should render something', () => {
    const { container } = render(<BuyWithDelivery />)

    expect(
      screen.getByRole('heading', { name: /BuyWithDelivery/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
