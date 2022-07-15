import { ComponentStory, ComponentMeta } from '@storybook/react'

import BuyWithDelivery from '.'

export default {
  title: 'Layout/BuyWithDelivery',
  component: BuyWithDelivery,
  argTypes: {
    title: { control: 'text' }
  }
} as ComponentMeta<typeof BuyWithDelivery>

const Template: ComponentStory<typeof BuyWithDelivery> = (args) => (
  <BuyWithDelivery {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'BUY with delivery'
}
