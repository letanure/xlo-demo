import { ComponentStory, ComponentMeta } from '@storybook/react'

import PriceDetails from '.'

export default {
  title: 'Checkout/PriceDetails',
  component: PriceDetails,
  argTypes: {
    prices: { control: 'object' }
  }
} as ComponentMeta<typeof PriceDetails>

const Template: ComponentStory<typeof PriceDetails> = (args) => (
  <PriceDetails {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  prices: [
    {
      label: 'Item',
      price: {
        amount: 259900,
        currency: 'PLN'
      }
    },
    {
      label: 'DELIVERY FROM',
      price: {
        amount: 400,
        currency: 'PLN'
      },
      discount: {
        amount: 899,
        currency: 'PLN'
      },
      description:
        'This discount applies for deliveries with InPost. In the 30 days before the start of this discount, the lowest price was 8,99 zł. Check terms and conditions'
    },
    {
      label: 'SERVICE FEE',
      icon: 'info',
      price: {
        amount: 250,
        currency: 'PLN'
      }
    }
  ]
}
