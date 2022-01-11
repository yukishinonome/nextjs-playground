import { render, screen } from '../../../test/testUtils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './SimpleForm.stories'

const { Index } = composeStories(stories)

describe('SimpleForm', () => {
  it('renders with play function', async () => {
    const { container } = render(<Index />)
    await Index.play({ canvasElement: container })

    expect(screen.getByTestId('print-name').textContent).toEqual(
      '入力した名前：yukishinonome'
    )
  })
})
