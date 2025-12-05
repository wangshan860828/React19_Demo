import React, { useState } from 'react'

interface HelloWorldProps {
  name: string;
  age: number;
  render?: (name: string, num: number) => React.ReactNode;
  onChange?: (num: number) => void;
}
export const HelloWorld = (props: HelloWorldProps) => {
    const { name, age, render, onChange } = props
    const [num, setNum] = useState(0)
  
    const handleMinus = () => {
      setNum(num - 1)
      onChange?.(num - 1)
    }

  return <div>Hello {name}, you are {age} years old ----num: {num}<button onClick={() => setNum(num + 1)}>add</button>
  <button onClick={handleMinus}>minus</button>
  {render?.(name, num)}</div>
}
