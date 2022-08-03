import { useRef, useState } from 'react'

type Position = {
  x: number
  y: number
}

type DndItem<T> = {
  value: T
  key: string
  position: Position
  element: HTMLElement
}

type DndRef<T> = {
  keys: Map<T, string>
  dndItems: DndItem<T>[]
  canCheckHovered: boolean
  dragStartPosition: Position
  dragElement: DndItem<T>
}

type DndSortResult<T> = {
  key: string
  value: T
  events: {
    ref: (element: HTMLElement) => void
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void
  }
}

/**
 * @description マウスポインターが要素と被っているか判定する
 */
const isHover = (event: MouseEvent, element: HTMLElement): boolean => {
  const clientX = event.clientX
  const clientY = event.clientY

  const rect = element.getBoundingClientRect()

  return (
    clientY < rect.bottom &&
    clientY > rect.top &&
    clientX < rect.right &&
    clientX > rect.left
  )
}

export const useDndSort = <T>(defaultItems: T[]): DndSortResult<T>[] => {
  const [items, setItems] = useState(defaultItems)

  const state = useRef<DndRef<T>>({
    dndItems: [],
    keys: new Map(),
    dragElement: null,
    canCheckHovered: true,
    dragStartPosition: { x: 0, y: 0 }
  }).current

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    const { dndItems, dragElement, dragStartPosition } = state

    if (!dragElement) return

    const x = clientX - dragStartPosition.x
    const y = clientY - dragStartPosition.y

    const dragStyle = dragElement.element.style

    dragStyle.zIndex = '100'
    dragStyle.cursor = 'grabbing'
    dragStyle.transform = `translate(${x}px,${y}px)`

    if (!state.canCheckHovered) return

    // すぐには確認できないようにする
    state.canCheckHovered = false

    // 300ms後に確認できるようにする
    setTimeout(() => (state.canCheckHovered = true), 300)

    // ドラッグしている要素の配列の位置を取得
    const dragIndex = dndItems.findIndex(({ key }) => key === dragElement.key)

    // ホバーされている要素の配列の位置を取得
    const hoveredIndex = dndItems.findIndex(
      ({ element }, index) => index !== dragIndex && isHover(event, element)
    )

    if (hoveredIndex !== -1) {
      // カーソルの位置を更新
      state.dragStartPosition.x = clientX
      state.dragStartPosition.y = clientY

      dndItems.splice(dragIndex, 1)
      dndItems.splice(hoveredIndex, 0, dragElement)

      const { left: x, top: y } = dragElement.element.getBoundingClientRect()

      dragElement.position = { x, y }

      setItems(dndItems.map((v) => v.value))
    }
  }

  const onMouseUp = () => {
    const { dragElement } = state

    if (!dragElement) return

    const dragStyle = dragElement.element.style

    dragStyle.zIndex = ''
    dragStyle.cursor = ''
    dragStyle.transform = ''

    state.dragElement = null

    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('mousemove', onMouseMove)
  }

  return items.map((value: T): DndSortResult<T> => {
    // 10進数よりランダムな値を返すために toString(16) している
    const key = state.keys.get(value) || Math.random().toString(16)

    state.keys.set(value, key)

    return {
      value,
      key,
      events: {
        ref: (element: HTMLElement) => {
          if (!element) return

          const { dndItems, dragElement, dragStartPosition } = state

          element.style.transform = ''

          const { left: x, top: y } = element.getBoundingClientRect()
          const position: Position = { x, y }

          const itemIndex = dndItems.findIndex((item) => item.key === key)

          if (itemIndex === -1) {
            return dndItems.push({ key, value, element, position })
          }

          if (dragElement?.key === key) {
            // ドラッグ要素のズレを計算する
            const dragX = dragElement.position.x - position.x
            const dragY = dragElement.position.y - position.y

            // 入れ替え時のズレをなくす
            element.style.transform = `translate(${dragX}px,${dragY}px)`

            // マウス ポインターの位置も計算してズレをなくす
            dragStartPosition.x -= dragX
            dragStartPosition.y -= dragY
          }

          // ドラッグ要素以外の要素をアニメーションさせながら移動させる
          if (dragElement?.key !== key) {
            const item = dndItems[itemIndex]

            // 前回の座標を計算
            const x = item.position.x - position.x
            const y = item.position.y - position.y

            // 要素を前回の位置に留めておく
            element.style.transition = ''
            element.style.transform = `translate(${x}px,${y}px)`

            // 一フレーム後に要素をアニメーションさせながら元の位置に戻す
            requestAnimationFrame(() => {
              element.style.transform = ''
              element.style.transition = 'all 300ms'
            })
          }

          state.dndItems[itemIndex] = { key, value, element, position }
        },
        onMouseDown: (event: React.MouseEvent<HTMLElement>) => {
          // ドラッグする要素
          const element = event.currentTarget

          // マウスポインターの座標を保持しておく
          state.dragStartPosition.x = event.clientX
          state.dragStartPosition.y = event.clientY

          // ドラッグしている要素のスタイルを上書き
          element.style.transition = ''
          element.style.cursor = 'grabbing'

          // 要素の座標を取得
          const { left: x, top: y } = element.getBoundingClientRect()
          const position: Position = { x, y }

          state.dragElement = { key, value, element, position }

          window.addEventListener('mouseup', onMouseUp)
          window.addEventListener('mousemove', onMouseMove)
        }
      }
    }
  })
}
