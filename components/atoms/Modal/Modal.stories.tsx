import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import Modal from '.'

export default {
  title: 'Atoms/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

export const Index: ComponentStoryObj<typeof Modal> = {
  args: {
    isOpen: true,
    children: (
      <>
        <div>Child Component</div>
        <button onClick={() => {}}>Close（ダミー）</button>
      </>
    )
  }
}
