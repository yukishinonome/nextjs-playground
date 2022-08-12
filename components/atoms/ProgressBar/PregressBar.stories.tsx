import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ProgressBar from '.'

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>

export const Index: ComponentStoryObj<typeof ProgressBar> = {
  args: {
    value: 50
  }
}
