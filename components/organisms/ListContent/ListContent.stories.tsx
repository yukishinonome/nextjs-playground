import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ListContent from './ListContent'

export default {
  component: ListContent
} as ComponentMeta<typeof ListContent>

const initial = [...Array(10)].map((_, idx) => {
  return {
    id: `id-${idx}`,
    content: `Item ${idx}`
  }
})

export const Index: ComponentStoryObj<typeof ListContent> = {
  args: { items: initial }
}
