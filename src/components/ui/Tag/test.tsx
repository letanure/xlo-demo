import { render, screen } from '@testing-library/react'

import Tag from '.'

describe('<Tag />', () => {
  it.skip('should render something', () => {
    const { container } = render(<Tag text="tag" />)

    expect(screen.getByRole('heading', { name: /Tag/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
