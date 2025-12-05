import { useState } from 'react'

export const List = () => {
    const [list, setList] = useState<number[]>([])
  return (
    <div>
      <ul>
        {list.map((item) => (
          item % 2 === 0 ? <li key={item}>{item}</li> : null
        ))}
      </ul>
      <button onClick={() => setList([...list, list.length + 1])}>追加元素</button>
    </div>
  )
}