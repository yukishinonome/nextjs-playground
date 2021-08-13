import { render } from '../../../test/testUtils'
import AnimationItems from './AnimationItems'

describe('AnimationsItems', () => {
  it('"animation-a-red"というクラスがある', () => {
    const { getByTestId } = render(<AnimationItems />, {})

    expect(getByTestId('stretch')).toHaveClass('animation-a-red')
  })
})
