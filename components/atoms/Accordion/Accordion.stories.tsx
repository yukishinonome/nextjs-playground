import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import Accordion from '.'

export default {
  component: Accordion
} as ComponentMeta<typeof Accordion>

export const Index: ComponentStoryObj<typeof Accordion> = {
  args: {
    title: 'アコーディオン',
    children: 'テキストテキストテキストテキストテキスト'
  }
}
