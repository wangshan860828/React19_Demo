import { List } from './list';
import type { ItemType } from './list';

export const TComponet = () => {
  // 2. 直接使用泛型类型参数传递给List组件
  const stringListData = ['a', 'b', 'c'];
  const numberListData = [1, 2, 3];
  const objectListData: ItemType[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>泛型数组示例</h2>
      
      {/* 字符串数组 */}
      <div>
        <h3>字符串数组:</h3>
        <List<string> listData={stringListData} onChange={(item) => console.log('Selected string:', item)} />
      </div>
      
      {/* 数字数组 */}
      <div>
        <h3>数字数组:</h3>
        <List<number> listData={numberListData} onChange={(item) => console.log('Selected number:', item)} />
      </div>
      
      {/* 对象数组 - 默认渲染 */}
      <div>
        <h3>对象数组 - 默认渲染:</h3>
        <List<ItemType> 
          listData={objectListData} 
          onChange={(item) => console.log('Selected object:', item)} 
        />
      </div>
    </div>
  );
}