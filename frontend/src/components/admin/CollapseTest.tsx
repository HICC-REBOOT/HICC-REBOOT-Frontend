import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트를 사용하여 스타일을 정의합니다.
const ItemContainer = styled.div`
  margin-bottom: 10px;
`;

const ItemHeader = styled.div`
  background-color: lightblue;
  padding: 5px;
  cursor: pointer;
`;

// ItemContent 컴포넌트의 스타일을 정의할 때 TypeScript의 인터페이스를 사용합니다.
interface ItemContentProps {
  expanded: boolean;
}

const ItemContent = styled.div<ItemContentProps>`
  overflow: hidden;
  height: 30rem;
  transition: max-height 1s ease-out;
  max-height: ${({ expanded }) => (expanded ? '9000px' : '0')};
  background-color: lightblue;
`;

interface ListItem {
  id: number;
  text: string;
  expanded: boolean;
}

const ExpandableList: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([
    { id: 1, text: 'Item 1', expanded: false },
    { id: 2, text: 'Item 2', expanded: false },
    { id: 3, text: 'Item 3', expanded: false },
  ]);

  const toggleItem = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, expanded: !item.expanded } : item)));
  };

  return (
    <div>
      {items.map((item) => (
        <ItemContainer key={item.id}>
          <ItemHeader onClick={() => toggleItem(item.id)}>{item.text}</ItemHeader>
          <ItemContent expanded={item.expanded}>Additional content for {item.text}</ItemContent>
        </ItemContainer>
      ))}
    </div>
  );
};

export default ExpandableList;
