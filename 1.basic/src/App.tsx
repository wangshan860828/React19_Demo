// import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import { HelloWorld } from './components/1.HelloWorld'
import { List } from './components/3.List'
import { ObjectState } from './components/2.Object'
import { Hooks } from './components/4.Hooks'
import { Form } from './components/features/1.Form'
import { FormAction } from './components/features/2.FormAction'
import { SuspenseDemo } from './components/features/3.Suspense/SuspenseDemo'
import { NewDemo } from './components/features/4.SuspenseNew/NewDemo'
import { UseReducer } from './components/features/5.UseState+UseReducer/2.UseReducer'
import { Parent } from './components/features/6.UseContext/1.Parent'
import { Memo } from './components/features/7.Memo'
// import { OldDemo } from './components/features/4.SuspenseNew/OldDemo'

function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <>
      <h2 style={{ color: 'red', display: 'none' }}>
          Components 1-4 学习项目</h2>
        <br />
        <div style={{ display: 'none' }}>
          <HelloWorld name="wangshan" age={18} 
          render={(name, num) => <h5 style={{ color: 'red' }}>Hello {name}, num: {num}</h5>}
          onChange={(num) => console.log('num:', num)}/>
          <ObjectState />
          <List />
          {isShow && <Hooks />}
          <button onClick={() => setIsShow(!isShow)}>切换显示和隐藏</button>
        </div>
      <h2 style={{ color: 'red', display: 'none' }}>
        Form 学习项目
        </h2><br />
        <div style={{ display: 'none' }}>
          <Form />
          <FormAction />
          <SuspenseDemo />
          {/* <OldDemo /> */}
          <NewDemo />
        </div>
        <UseReducer />
        <Parent />
        <h2 style={{ color: 'red'}}>
          Memo 学习项目
        </h2><br />
        <Memo />
    </>
  )
}

export default App
