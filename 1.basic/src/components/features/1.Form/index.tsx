import { useState } from "react"

export const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('formData:', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        用户名:
        <input type="text" name="username" value={formData.username} 
        onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      </label>
      <label>
        密码:
        <input type="password" name="password" value={formData.password} 
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      </label>
      <button type="submit">提交</button>
    </form>
  )
}