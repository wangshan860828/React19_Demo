// import { useState } from "react";
import { useReducer } from "react";

// 普通的实现方式
// export const UseReducer = () => {
//   const [info, setInfo] = useState({ name: 'wangshan', age: 18 });

//   return (
//     <div>
//       <p>name: {info.name}</p>
//       <p>age: {info.age}</p>
//       <input type="text" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />
//       <input type="number" value={info.age} onChange={(e) => setInfo({ ...info, age: Number(e.target.value) })} />
//     </div>
//   )
// }

// useReducer 的实现方式
export const UseReducer = () => {
  const [info, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'updateName':
        return { ...state, name: action.payload };
      case 'updateAge':
        return { ...state, age: action.payload };
      default:
        return state;
    }
  }, { name: 'wangshan', age: 18 });

  return (
    <div>
      <p>name: {info.name}</p>
      <p>age: {info.age}</p>
      <input type="text" value={info.name} onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value })} />
      <input type="number" value={info.age} onChange={(e) => dispatch({ type: 'updateAge', payload: Number(e.target.value) })} />
    </div>
  )
}   