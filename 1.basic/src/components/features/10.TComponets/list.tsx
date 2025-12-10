import React from 'react';

// 定义一个接口表示数据项类型
export interface ItemType {
  id: number;
  name: string;
}

interface TProps<T> {
  listData: T[];
  onChange?: (value: T) => void;
  // 允许父组件自定义渲染方式
  renderItem?: (item: T) => React.ReactNode;
}

export function List<T>(props: TProps<T>) {
  const { listData, onChange, renderItem } = props;
  
  // 默认渲染函数：处理不同类型的数据
  const defaultRenderItem = (item: T): React.ReactNode => {
    if (item === null || item === undefined) {
      return <span>null</span>;
    }
    
    // 检查是否为 ItemType 类型
    if (typeof item === 'object' && 'id' in item && 'name' in item) {
      const typedItem = item as unknown as ItemType;
      return <span>{typedItem.name}</span>;
    }
    
    // 检查是否为其他对象类型
    if (typeof item === 'object') {
      // 对于对象类型，尝试显示有意义的内容
      if ('name' in item) {
        return <span>{(item as { name: string }).name}</span>;
      }
      if ('title' in item) {
        return <span>{(item as { title: string }).title}</span>;
      }
      // 否则显示对象的JSON表示
      return <span>{JSON.stringify(item)}</span>;
    }
    
    // 对于基本类型直接显示
    return <span>{String(item)}</span>;
  };
  
  // 使用自定义渲染函数或默认渲染函数
  const renderItemContent = renderItem || defaultRenderItem;

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px', margin: '1rem 0' }}>
      <h3>列表组件</h3>
      {listData.length === 0 ? (
        <p style={{ color: '#999', fontStyle: 'italic' }}>列表为空</p>
      ) : (
        <ul>
          {listData.map((item, index) => (
            <li 
              key={index} 
              onClick={() => onChange?.(item)}
              style={{ 
                padding: '0.5rem', 
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f0f0f0' }
              } as React.CSSProperties}
            >
              {renderItemContent(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
