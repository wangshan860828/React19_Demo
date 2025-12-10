# React19_Demo
react19学习中编写的简单 demo

# 新建项目
- pnpm create vite@latest

# 组件开发（推荐：函数式组件） `1.HelloWorld组件`
`结论：函数式组件与 Hooks已成为现在 React 开发的绝对标准。`
- 组件的入参（props）和 组件的状态（state）
- 组件的导出方式：具名导出和默认导出，`推荐`使用具名导出
```js
// 推荐使用具名导出
export const Button = (props) => {
  return <button>{props.text}</button>
}

// 不推荐使用默认导出
const Button = (props) => {
  return <button>{props.text}</button>
}
export default Button
```
- 组件的传值与调用：HelloWorld 组件，被 App 组件调用，传入 name , age 两个 props，同时传入一个 render 函数，用于渲染 name
- render props 的使用：HelloWorld组件中变量 num 在自己组件中维护好之后传递给父组件使用
- 组件的事件处理：HelloWorld 组件中，点击 add 按钮会增加 num 的值，点击 minus 按钮会减少 num 的值。同时，会调用 onChange 函数，将最新的 num 值传递给父组件。

# 状态管理（Hooks）
- useState：用于在函数式组件中添加状态, 对象元素状态的改变。
  1. 基础用法：`1.HelloWorld组件`和`2.Object组件`
  2. 进阶用法：`components/features/5.UseState+UseReducer/1.UseState.tsx`
- useRef：用于在函数式组件中创建引用。
- useEffect：用于在函数式组件中添加副作用。
- useReducer：用于在函数式组件中使用 reducer 模式。`详细内容见下文。`
- useContext：用于在函数式组件中使用上下文。`详细内容见下文。`
- `React.memo`：这是一个高价组件，用于包裹你的函数式组件，它会对传入的 props 进行浅比较，只有在 props 发生变化时，才会重新渲染被包裹的组件。这是防止因父组件渲染而导致的不必要子组件渲染的主要工具。
- useMemo：用于“记忆化”一个计算结果，它接收一个函数和一个依赖性数组，只有在依赖性发生变化时，才会重新执行该函数并返回新的值，它主要用于两个场景：
  1. 缓存开销巨大的计算结果，避免在每次渲染时都重复计算。
  2. 当向一个被 React.memo 包裹的子组件传递对象或数组作为 prop时，使用 useMemo 来保证该 prop 的引用稳定性。
- useCallback：用于“记忆化”一个函数，它与 useMemo 类似，但专门用于函数，主要使用场景是：当向一个被 React.memo 包裹的子组件传递函数作为 prop 时，使用 useCallback 来保证该 prop 的引用稳定性。
**`核心原则：不要过早优化`** 这些 API `React.memo`、`useMemo`、`useCallback` 自身也有成本（内存占用和比较开销）。只有你通过 `React DevTools Profiler` 等工具确认了某个组件存在性能瓶颈时，才应该考虑使用他们进行优化。
`useMemo`和`useCallback` 的组件位置：`components/features/7.Memo/index.tsx`
- useImperativeHandle：用于在函数式组件中自定义暴露的实例方法。
- useLayoutEffect：用于在函数式组件中添加布局副作用。

# 列表渲染（map 方法） `3.List组件`
# 条件渲染 （三目运算符） `3.List组件`

# key 的使用
- 稳定且唯一的 key值能帮助 React 最大限度的复用已有的 Dom 元素和组件实例，从而极大的提升性能。
- 如果不提供 key，React 会在控制台报警告，并且在列表更新时可能会出现不可预测的 UI bug和性能问题。
- 使用数组的索引 index 作为 key 是一种常见的反模式，应当极力避免。因为当列表的顺序发生变化时，React 会根据 key 来判断哪些元素是新增的、哪些元素是删除的、哪些元素是移动的。如果使用索引作为 key，当列表发生移动时，React 会认为所有元素都被删除和新增，从而导致性能问题。
- 最理想的 key值，是数据项本身就带有的，独一无二且不随时间变化的字符串或数字。

# 深入 Hooks 和生命周期  `4.Hooks组件`
## 副作用 useEffect：
- 是指在函数式组件中执行一些异步操作或修改 DOM 的操作。通过 `useEffect` 钩子函数可以实现副作用的管理。
```js
useEffect(() => {
  // 副作用操作
  return () => {
    // 清理操作
  }
}, [dependencies])
```
- 依赖数组（dependencies）：用于指定 useEffect 依赖的变量。只有当依赖的变量发生变化时，才会执行副作用操作。如果不提供依赖数组，副作用操作会在每次组件渲染时都执行。
- 清理函数（cleanup function）：用于在组件卸载时执行一些清理操作，例如取消订阅、清除定时器等。如果 useEffect 返回一个函数，React 会在组件卸载时调用该函数。

## useEffect 其它两种写法
```js
// 1. 没有依赖数组，副作用操作会在每次组件渲染时都执行
useEffect(() => {
  // 副作用操作
})

// 2. 空数组依赖，副作用操作只会在组件挂载时执行一次
useEffect(() => {
  // 副作用操作
}, [])
```
## useRef 的使用 `4.Hooks组件`
- 主要用于访问 DOM 元素: `Hooks` 组件中，通过 `useRef` 创建一个引用对象，将其赋值给 `inputRef` 变量。
- 存储可变值（实例变量）: `Hooks` 组件中，通过 `useRef` 创建一个引用对象，将其赋值给 `isMounted` 变量。

## useReducer 的使用 `components/features/5.UseReducer组件`
- 设计理念（同`redux`）：
  1. 对于状态的操作，我们需要提取出来，叫做 action
  2. 然后 action 需要有专门的方法来完成状态值的更新，reducer
  3. 结果 state，驱动视图的更新

## useContext 的使用 `components/features/6.UseContext组件`
- `useState` 和 `useReducer` 都是用来管理组件内部状态的
- `useContext` 是用来管理全局状态的。
- `6.UseContext` 组件中需要实现 `Parent` 给 `GrandChild` 传递数据 [三种实现方式]

# React19 新特性  `components/features`文件夹中
## Actions: 表单交互的革命
- Form 之前的实现方式 `1.Form组件`
- Form Action 的实现方式 `2.Form组件`
  1. 使用`useActionsState` 处理 Pending/Error/Success 状态
  2. 使用`useFormStatus` 优化用户体验 
    - 深层状态：isPending ，用 context 传递 ,而不是 props 传递 `FormAction 中 SubmitButton的 isPending 传递`

## 并发与use Hooks
### Suspense 与 lazy 组件 `3.Suspense组件`
- Suspense 组件：主要是用来加载异步组件的。
- lazy 组件：主要是用来延迟加载组件的代码，从而提高应用的初始加载速度。
- 注意事项：
  - lazy 组件只能在 Suspense 组件中使用。
  - Suspense 组件的 fallback 属性是必须的，用于在异步组件加载完成之前显示的占位符。
  - lazy 组件返回的 Promise 必须在 Suspense 组件中处理，否则会报错。
  - 构建产物后可发现，lazy 组件的代码会被分离到一个单独的 chunk 文件中，只有当组件被渲染时才会加载该文件。
### Suspense 结合 use 的使用 `4.SuspenseNew 中 NewDemo 组件`
- 相当于用 use 从 Promise 中获取数据，然后渲染到组件中。

## 其它新特性
### useOptimistic: 实现乐观更新，提升交互体验
- 在与服务区交互时，为了让应用感觉更‘快’，我们常常使用乐观更新技术，即在操作的请求还未得到服务器确认时，就先假设它会成功，并立即更新 UI.
- `useOptimistic`Hook 将这种赋值的模式变得非常简单。它接收一个当前状态，并返回一个该状态的‘乐观’副本以及一个更新函数，在异步操作期间，你可以调用更新函数来设置一个临时的、乐观的状态值。当异步操作结束后，无论是成功还是失败，React 都会自动将 UI 回滚到原始的，与服务器一致的状态。
  
### Asset Loading: 通过 Suspense 管理资源加载
- 在过去，我们常常会遇到样式闪烁或字体未加载完成而导致布局抖动。React19 将样式、字体、脚本等资源的加载也整合进了 Suspense 的范畴。
- 现在，React 能够自动检测到组件渲染所依赖的样式表和字体，并在这些资源加载完成之前，暂停渲染并显示`Suspense`的 fallback 内容。这从根本上保证了用户看到的永远是内容与样式的完全匹配，完整的界面，极大的提升了用户体验的稳定性。
  
### ref 作为 Prop 简化 forwardRef
```js
// 之前的实现方式
const Button = forwardRef((props, ref) => {
  return <button ref={ref}>{...props}</button>
})

// 新的实现方式
const Button = (props) => {
  return <button ref={props.ref}>{...props}</button>
}
```

## React Compiler
- 结合 babel 插件来使用，实现 react 的编译时优化
- 可以从编译时，运行时来分析实现的自动优化(偏理论)

## 自定义 Hooks `components/features/9.CustomHooks`
- `useLocalStorageState`：用于在组件中存储和获取本地存储的数据。

## 泛型组件和泛型 Hooks（建议用 function 定义的方式，例如：useLocalStorageState）
- useLocalStorageState 是泛型 Hook 的定义
- 泛型组件：用于在定义组件时，指定组件的 props 类型。`components/features/10.TComponets/list.tsx`

## React 事件对象的精确类型
- 鼠标事件：`React.MouseEvent<HTMLElement>`
- 表单元素变化事件：`React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>`
- 表单提交事件：`React.FormEvent<HTMLFormElement>`

## zod 库
- `运行时类型校验库`，zod 准许我们定义一个数据的 schema模式，然后用它来解析未知来源的数据。

## router 的类型
- createBrowserRouter：用于创建浏览器路由。
- createHashRouter：用于创建哈希路由。
- createMemoryRouter：用于创建内存路由。
- createStaticRouter：用于创建静态路由。