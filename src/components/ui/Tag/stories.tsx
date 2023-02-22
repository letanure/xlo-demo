import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tag from '.'

export default {
  title: 'UI/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' }
  }
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Basic = Template.bind({})
Basic.args = {
  text: 'tag'
}
