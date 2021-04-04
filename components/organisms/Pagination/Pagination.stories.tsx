import React from 'react'
import Pagination, { Props } from './Pagination'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Organisms/Pagination',
  component: Pagination
} as Meta

const Template: Story<Props> = (args) => <Pagination {...args} />

export const Index = Template.bind({})
Index.args = {
  pageItems: [...Array(102)].map((_, idx) => {
    return 'Item' + (idx + 1)
  })
}
