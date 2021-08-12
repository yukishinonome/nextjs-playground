import { render } from '../../../test/testUtils'
import AnimationItems from './AnimationItems'

describe('AnimationsItems', () => {
  it('"box"というクラスがある', () => {
    const { getByTestId } = render(<AnimationItems />, {})

    expect(getByTestId('stretch')).toHaveClass('box-a')
  })
})
