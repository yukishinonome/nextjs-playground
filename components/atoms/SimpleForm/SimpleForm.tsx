import { VFC, useState } from 'react'

const SimpleFrom: VFC = () => {
  const [name, setName] = useState('')
  const [printName, setPrintName] = useState('')

  return (
    <>
      <form
        onSubmit={(event) => {
          setPrintName(name)
          event.preventDefault()
        }}
      >
        <label>
          Name：
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>入力した名前：{printName}</div>
    </>
  )
}

export default SimpleFrom
