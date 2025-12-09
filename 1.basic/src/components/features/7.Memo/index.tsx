import { useState, useMemo, useCallback, useEffect } from 'react';

// 子组件，用于展示回调函数引用是否变化
const ChildComponent = ({ onButtonClick, data }: { onButtonClick: () => void; data: number }) => {
  // 当 onButtonClick 或 data 变化时，打印日志
  useEffect(() => {
    console.log('ChildComponent: onButtonClick reference changed');
  }, [onButtonClick]);

  useEffect(() => {
    console.log('ChildComponent: data changed');
  }, [data]);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px', margin: '1rem 0' }}>
      <h3>子组件</h3>
      <p>接收的计算结果: {data}</p>
      <button onClick={onButtonClick}>调用父组件的回调函数</button>
    </div>
  );
};

export const Memo = () => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);

  // 没有依赖项的 useEffect，每次组件重新渲染时都会执行
  useEffect(() => {
    console.log('Memo 组件重新渲染了！当前 Count:', count, 'Random:', random.toFixed(4));
  });

  // 模拟一个计算密集型的操作
  const expensiveCalculation = (num: number) => {
    console.log('执行了昂贵的计算...');
    // 模拟耗时操作
    for (let i = 0; i < 100000000; i++) {
        num += i;
    }
    return num * 2;
  };

  // 使用 useMemo 缓存计算结果
  // 只有当 count 变化时，才会重新执行 expensiveCalculation
  const memoizedResult = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // 使用 useCallback 缓存回调函数
  // 只有当 count 变化时，才会创建新的函数引用
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // 不使用 useCallback 的普通函数
  // 每次组件重新渲染时，都会创建新的函数引用
  const generateRandom = () => {
    setRandom(Math.random());
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h2>useMemo 和 useCallback 演示</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <p>Count: {count}</p>
        <p>Random: {random.toFixed(4)}</p>
      </div>

      {/* 展示 useMemo 的效果 */}
      <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px', margin: '1rem 0' }}>
        <h3>useMemo 演示</h3>
        <p>计算结果: {memoizedResult}</p>
        <p>说明: 点击 "生成随机数" 按钮，组件会重新渲染，但由于 count 没有变化，昂贵的计算不会重新执行。</p>
        <p>查看控制台可以看到 "执行了昂贵的计算..." 只在 count 变化时出现。</p>
      </div>

      {/* 展示 useCallback 的效果 */}
      <ChildComponent onButtonClick={incrementCount} data={memoizedResult} />
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button onClick={incrementCount}>
          增加 Count (useCallback)
        </button>
        <button onClick={generateRandom}>
          生成随机数 (重新渲染组件)-普通函数
        </button>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h3>总结</h3>
        <ul>
          <li><strong>useMemo</strong>: 只有点击 "增加 Count" 按钮，才会重新执行昂贵的计算，点击 "生成随机数" 按钮，组件会重新渲染，但由于 count 没有变化，昂贵的计算不会重新执行。</li>
          <li><strong>useCallback</strong>: 缓存函数引用，避免子组件不必要的重新渲染</li>
        </ul>
      </div>
    </div>
  );
};