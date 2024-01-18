import React from 'react';
import * as N from './style/NumberTable.style';

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
    <N.Container>
      <N.Title>숫자로 보는 HICC</N.Title>
      <N.Content>더 많은 정보를 얻고싶다면 HICC에 가입해보세요</N.Content>
      <N.TableContainer>
        {FIGURE_ITEMS.map((item, index) => (
          <N.TableBox key={item.title}>
            <N.TableContent>
              <N.TableTitle>{item.title}</N.TableTitle>
              <N.NumberContainer>
                <N.Number>{item.number}</N.Number>
                <N.Unit>{item.unit}</N.Unit>
              </N.NumberContainer>
            </N.TableContent>
          </N.TableBox>
        ))}
      </N.TableContainer>
    </N.Container>
  );
}

export default NumberTable;