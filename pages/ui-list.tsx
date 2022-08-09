import Accordion from '@/components/atoms/Accordion'
import { FC } from 'react'
import Layout from '../components/Layout'

const UiList: FC = () => {
  return (
    <Layout pageName="ui-list">
      <Accordion title="アコーディオン">
        <p>テキストテキストテキストテキストテキストテキスト</p>
      </Accordion>
      <div>UI</div>
      <div>UI</div>
      <div>UI</div>
    </Layout>
  )
}

export default UiList
