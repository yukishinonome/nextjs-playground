import { useDndSort } from '@/hooks/use-dnd-sort'
import { VFC } from 'react'
import styles from './DndImageList.module.scss'

type Result = {
  // key propsに設定する文字列
  key: string

  // 配列内の画像URL文字列
  value: string

  // ドラッグ＆ドロップ処理で使うイベント関数を返す関数
  events: {
    ref: (value: any) => void
    onPointerDown: (event: any) => void
  }
}

const imageList = [
  'https://source.unsplash.com/zUNs99PGDg0',
  'https://source.unsplash.com/weoc-0vfM5I',
  'https://source.unsplash.com/QnUywvDdI1o',
  'https://source.unsplash.com/Pb9bUzH1nD8',
  'https://source.unsplash.com/d5SZqLkpIrY',
  'https://source.unsplash.com/L2ost-ZEmK8',
  'https://source.unsplash.com/SPJfByIDMtY',
  'https://source.unsplash.com/hiTFCwb6-Ig',
  'https://source.unsplash.com/LUpDjlJv4_c'
]

const DndImageList: VFC = () => {
  const results: Result[] = useDndSort(imageList)

  return (
    <div className={styles.container}>
      {results.map((item) => (
        <div key={item.key} className={styles.imageCard} {...item.events}>
          <img
            src={item.value}
            alt="ソート可能な画像"
            className={styles.imageStyle}
          />
        </div>
      ))}
    </div>
  )
}

export default DndImageList
