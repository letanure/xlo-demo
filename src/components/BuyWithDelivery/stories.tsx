import { ComponentStory, ComponentMeta } from '@storybook/react'

import BuyWithDelivery from '.'

export default {
  title: 'Layout/BuyWithDelivery',
  component: BuyWithDelivery,
  argTypes: {
    prop1: { control: 'text' }
  }
} as ComponentMeta<typeof BuyWithDelivery>

const Template: ComponentStory<typeof BuyWithDelivery> = (args) => (
  <BuyWithDelivery {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  prop1: 'something'
}
