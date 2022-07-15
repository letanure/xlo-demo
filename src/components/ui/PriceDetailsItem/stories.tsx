import { ComponentStory, ComponentMeta } from '@storybook/react'

import PriceDetailsItem from '.'

export default {
  title: 'Layout/PriceDetailsItem',
  component: PriceDetailsItem,
  argTypes: {
    label: { control: 'text' },
    price: { control: 'object' },
    description: { control: 'text' },
    discount: { control: 'object' }
  }
} as ComponentMeta<typeof PriceDetailsItem>

const Template: ComponentStory<typeof PriceDetailsItem> = (args) => (
  <PriceDetailsItem {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Label',
  price: {
    amount: 10000,
    currency: 'PLN'
  }
}

export const Icon = Template.bind({})
Icon.args = {
  label: 'Label',
  price: {
    amount: 10000,
    currency: 'PLN'
  },
  icon: 'info'
}

export const Description = Template.bind({})
Description.args = {
  label: 'Label',
  price: {
    amount: 10000,
    currency: 'PLN'
  },
  description:
    'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
}

export const Discount = Template.bind({})
Discount.args = {
  label: 'Label',
  price: {
    amount: 10000,
    currency: 'PLN'
  },
  discount: {
    amount: 15000,
    currency: 'PLN'
  }
}

export const All = Template.bind({})
All.args = {
  label: 'Label',
  price: {
    amount: 10000,
    currency: 'PLN'
  },
  discount: {
    amount: 15000,
    currency: 'PLN'
  },
  description:
    'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
}
