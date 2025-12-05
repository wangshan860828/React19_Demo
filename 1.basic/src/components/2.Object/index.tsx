import { useState } from 'react'

export const ObjectState = () => {
  const [info, setInfo] = useState({ name: 'wangshan', age: 18 })

  const handleAgeAdd = () => {
    setInfo({ ...info, age: info.age + 1 })
  }

  const handleNameChange = () => {
    setInfo({ ...info, name: 'wangshan2' })
  }

  const handleUpateInfo = () => {
    setInfo((prevState) => ({ ...prevState, age: prevState.age + 1, name: prevState.name + '2'}))
  }

  return (
    <div>
      <p>name: {info.name}</p>
      <p>age: {info.age}</p>
      <button onClick={handleAgeAdd}>年龄加一</button>
      <button onClick={handleNameChange}>姓名变更</button>
      <button onClick={handleUpateInfo}>推荐方式</button>
    </div>
  )
}
