import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ShowMoreAccordion from '.'

export default {
  component: ShowMoreAccordion
} as ComponentMeta<typeof ShowMoreAccordion>

export const Index: ComponentStoryObj<typeof ShowMoreAccordion> = {
  args: {
    title: 'アコーディオン',
    initialShowCount: 2,
    contents: ['hoge', 'hoge', 'hoge', 'hoge', 'hoge']
  }
}
