import React from 'react'
import ListContent, { ItemType } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'ListContent',
  component: ListContent
} as Meta

const initial = [...Array(10)].map((_, idx) => {
  return {
    id: `id-${idx}`,
    content: `Item ${idx}`
  }
})

const Template: Story<{ initial: ItemType[] }> = (args) => (
  <ListContent {...args} />
)

export const Index = Template.bind({})
Index.args = {
  initial
}
