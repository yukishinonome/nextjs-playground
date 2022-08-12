import Accordion from '@/components/atoms/Accordion'
import ProgressBar from '@/components/atoms/ProgressBar'
import ShowMoreAccordion from '@/components/atoms/ShowMoreAccordion'
import { FC, useState } from 'react'
import Layout from '../components/Layout'

const contents = ['hoge', 'hoge', 'hoge', 'hoge', 'hoge']

const UiList: FC = () => {
  const [progress, setProgress] = useState(0)

  const handleUpdateProgress = () => {
    setProgress((prev) => (prev !== 100 ? prev + 20 : 0))
  }

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
      <div>
        <ProgressBar value={progress} />
        <button onClick={handleUpdateProgress}>更新</button>
      </div>
      <div>UI</div>
    </Layout>
  )
}

export default UiList
