import Accordion from '@/components/atoms/Accordion'
import ShowMoreAccordion from '@/components/atoms/ShowMoreAccordion'
import { FC } from 'react'
import Layout from '../components/Layout'

const contents = ['hoge', 'hoge', 'hoge', 'hoge', 'hoge']

const UiList: FC = () => {
  return (
    <Layout pageName="ui-list">
      <Accordion title="アコーディオン">
        <p>テキストテキストテキストテキストテキストテキスト</p>
      </Accordion>
      <ShowMoreAccordion
        title="アコーディオン"
        initialShowCount={2}
        contents={contents}
      />
      <div>UI</div>
      <div>UI</div>
    </Layout>
  )
}

export default UiList
