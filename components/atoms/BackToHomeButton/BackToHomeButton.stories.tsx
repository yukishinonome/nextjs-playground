import BackToHomeButton from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Atoms/BackToHomeButton',
  component: BackToHomeButton
} as Meta

const Template: Story = (args) => <BackToHomeButton {...args} />

export const Index = Template.bind({})
Index.args = {}
