import { useLocalStorageState } from "./useLocalStorageState";
export const MyHooks = ()=> {
  const [count, setCount] = useLocalStorageState('count', 0);

  return (
    <div>
      <h3>自定义 Hook 示例</h3>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
    </div>
  );
}   