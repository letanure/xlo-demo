import { ComponentStory, ComponentMeta } from '@storybook/react'

import Price from '.'

export default {
  title: 'UI/Price',
  component: Price,
  argTypes: {
    amount: { control: 'number' },
    currency: { control: 'select' }
  }
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />

export const Basic = Template.bind({})
Basic.args = {
  amount: 1000,
  currency: 'PLN'
}
