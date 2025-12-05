import { useState } from "react"

export const UseState = () => {
    //1、基础用法
    //2、就近取值
    //3、函数式初始化数据
  const [count, setCount] = useState(0) // 初始化 count 为 0
  const [num, setNum] = useState(()=>0) // 初始化 num 为 0
  return (
    <div>
      <h2>UseState</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>增加</button>
      <button onClick={() => setCount(c => c - 1)}>减少</button>
      <p>num: {num}</p>
      <button onClick={() => setNum(n => n + 1)}>num增加</button>
      <button onClick={() => setNum(n => n - 1)}>num减少</button>
    </div>
  )
}