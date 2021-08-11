import { render } from '../../../test/testUtils'
import Pagination from './Pagination'
import pageItems from '../../../test/fixtures/pageItems'

describe('Pagination', () => {
  describe('pageItemが存在する時', () => {
    it('pageItemが４つ表示される', () => {
      const { getAllByText } = render(<Pagination pageItems={pageItems} />, {})

      expect(getAllByText('Item', { exact: false }).length).toEqual(4)
    })
  })
})
