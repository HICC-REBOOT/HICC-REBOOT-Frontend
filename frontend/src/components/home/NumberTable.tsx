import React from 'react';
import {
  Container,
  Title,
  Content,
  TableBox,
  TableContent,
  TableTitle,
  NumberContainer,
  Unit,
  Number,
  TableContainer,
} from './style/NumberTable.style';

const FIGURE_ITEMS = [
  {
    title: '창립년도',
    number: 1972,
    unit: '년',
  },
  {
    title: '운영 기수',
    number: 53,
    unit: '기',
  },
  {
    title: '회원 수',
    number: 190,
    unit: '+',
  },
];

function NumberTable() {
  return (
    <Container>
      <Title>숫자로 보는 HICC</Title>
      <Content>더 많은 정보를 얻고싶다면 HICC에 가입해보세요</Content>
      <TableContainer>
        {FIGURE_ITEMS.map((item, index) => (
          <TableBox key={item.title}>
            <TableContent>
              <TableTitle>{item.title}</TableTitle>
              <NumberContainer>
                <Number>{item.number}</Number>
                <Unit>{item.unit}</Unit>
              </NumberContainer>
            </TableContent>
          </TableBox>
        ))}
      </TableContainer>
    </Container>
  );
}

export default NumberTable;
