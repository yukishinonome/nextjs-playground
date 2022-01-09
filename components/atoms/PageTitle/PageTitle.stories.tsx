import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import PageTitle from '.'

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle
} as ComponentMeta<typeof PageTitle>

export const Index: ComponentStoryObj<typeof PageTitle> = {
  args: {
    pageName: 'react-beautiful-dnd'
  }
}
