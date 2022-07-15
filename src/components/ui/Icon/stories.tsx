import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from '.'

export default {
  title: 'Layout/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'text' },
    width: { control: 'number' }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'info'
}

export const Width = Template.bind({})
Width.args = {
  name: 'info',
  width: 48
}
