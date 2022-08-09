import { FC, useState } from 'react'

type Props = {
  title: string
  isOpenDefault?: boolean
  initialShowCount?: number
  contents: string[]
}

const ShowMoreAccordion: FC<Props> = ({
  title,
  isOpenDefault = false,
  initialShowCount = 3,
  contents
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault)
  const [showCount, setShowCount] = useState(initialShowCount)

  const handleClick = () => {
    setShowCount(isOpen ? initialShowCount : contents.length)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <h4>{title}</h4>
      <ul>
        {contents.slice(0, showCount).map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
      <button onClick={handleClick}>{isOpen ? '閉じる' : 'もっと見る'}</button>
    </>
  )
}

export default ShowMoreAccordion
