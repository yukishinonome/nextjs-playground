import MuiButton from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Atoms/MuiButton',
  component: MuiButton
} as Meta

const Template: Story = (args) => <MuiButton {...args} />

export const Index = Template.bind({})
Index.args = {}
