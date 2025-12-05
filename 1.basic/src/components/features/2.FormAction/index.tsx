import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

//子组件：提交按钮
const SubmitButton = () => {
    const { pending, data, method, action } = useFormStatus()
    console.log('pending:', pending)
    console.log('data:', data)
    console.log('method:', method)
    console.log('action:', action)
  
  return (
    <button type="submit"> {pending ? '提交中。。。' : '提交'}</button>
  )
}

export const FormAction = () => {
    //previousState: 上一次的状态值
  const handleSubmit = async (previousState: any, formData: FormData) => {
    console.log('previousState:', previousState)
    console.log('formData:', ...formData.values())

    // 模拟网络请求延迟
    await delay(1000)

    return {
      success: true,
      data: {
        username: formData.get('username'),
        password: formData.get('password'),
      }
    }
  }

  //state: 数据状态值
  //submitAction: 提交动作函数
  //isPending: 提交状态
  const [state, submitAction, isPending] = useActionState(handleSubmit, null)
  console.log('isPending:', isPending)
  console.log('state:', state)

  return (
    <form action={submitAction}>
      <label>
        用户名:
        <input type="text" name="username" />
      </label>
      <label>
        密码:
        <input type="password" name="password" />
      </label>
      {/* <button type="submit"> {isPending ? '提交中。。。' : '提交'}</button> */}
      {/* 深层状态：isPending ，用 context 传递 ,而不是 props 传递 */}
      <SubmitButton />
    </form>
  )
}