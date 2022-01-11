import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { within, waitFor, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import SimpleForm from './SimpleForm'

export default {
  title: 'Atoms/SimpleForm',
  component: SimpleForm
} as ComponentMeta<typeof SimpleForm>

export const Index: ComponentStoryObj<typeof SimpleForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByRole('textbox'), 'yukishinonome', {
      delay: 100
    })
    userEvent.click(canvas.getByText('Submit'))

    await waitFor(() =>
      expect(canvas.getByTestId('print-name').textContent).toEqual(
        '入力した名前：yukishinonome'
      )
    )
  }
}
