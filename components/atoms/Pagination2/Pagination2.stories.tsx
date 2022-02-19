import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import Pagination2 from '.'

export default {
  title: 'Atoms/Pagination2',
  component: Pagination2
} as ComponentMeta<typeof Pagination2>

export const Index: ComponentStoryObj<typeof Pagination2> = {
  args: {
    currentPage: 5,
    totalPages: 10,
    createHref: (page) => `${window.location.href}?page=${page}`
  }
}
