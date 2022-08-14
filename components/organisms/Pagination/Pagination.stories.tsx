import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import Pagination from './Pagination'

export default {
  component: Pagination
} as ComponentMeta<typeof Pagination>

export const Index: ComponentStoryObj<typeof Pagination> = {
  args: {
    pageItems: [...Array(102)].map((_, idx) => {
      return 'Item' + (idx + 1)
    })
  }
}
