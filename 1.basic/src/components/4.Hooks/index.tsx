import { useState, useEffect, useRef} from 'react'

export const Hooks = () => {
  const [count, setCount] = useState(0)

  // 1. 访问 DOM 元素
  const inputRef = useRef<HTMLInputElement>(null)
  // 2. 保存非状态的变量值
  const isMounted = useRef(false)

  const handleAdd = () => {
    setCount(count + 1)
  }

  // count变化时执行
  useEffect(() => {
    console.log('count:', count)
    document.title = `count: ${count}`
    console.log('isMounted.current:', isMounted.current)
  }, [count])

  // 只会在组件挂载时执行一次
  useEffect(() => {
    console.log('组件挂载完成') //类比于componentDidMount
    console.log('inputRef.current:', inputRef.current?.focus())
    isMounted.current = true

    return () => {
      console.log('组件卸载') //类比于componentWillUnmount
    }
  }, [])

  // 每次组件渲染时都执行
  useEffect(() => {
    console.log('组件更新完成') //类比于componentDidUpdate
  })

  return (
    <div style={{ backgroundColor: 'pink', padding: '10px'}}>
      <p>count: {count}</p>
      <input ref={inputRef} type="text" />
      <button onClick={handleAdd}>Hooks增加</button>
    </div>
  )
}