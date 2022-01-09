import PageTitle from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle
} as Meta

const Template: Story<{ pageName: string }> = (args) => <PageTitle {...args} />

export const Index = Template.bind({})
Index.args = {
  pageName: 'react-beautiful-dnd'
}
