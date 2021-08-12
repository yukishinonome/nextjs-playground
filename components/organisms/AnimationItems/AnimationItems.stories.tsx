import { Story, Meta } from '@storybook/react/types-6-0'
import AnimationItems from './AnimationItems'

export default {
  title: 'Organisms/AnimationItems',
  component: AnimationItems
} as Meta

const Template: Story = (args) => <AnimationItems {...args} />

export const Index = Template.bind({})
Index.args = {}
