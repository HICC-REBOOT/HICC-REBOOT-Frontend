import React from 'react';
import useScrollCount from '@hooks/animations/useScrollCount';
import useGetMemberCount from '@query/get/useGetJoinedPeopleNumber';
import * as N from './style/NumberTable.style';

const year = Number(new Date().getFullYear());

const FIGURE_ITEMS = [
  {
    title: '창립년도',
    number: 1972,
    unit: '년',
  },
  {
    title: '운영 기수',
    number: year - 1971,
    unit: '기',
  },
  {
    title: '회원 수',
    number: 190,
    unit: '+명',
  },
];

type CountItem = {
  [key: number]: { ref: React.RefObject<HTMLDivElement> };
};

function NumberTable() {
  const JoinedNumber = Number(useGetMemberCount().data);
  const countItem: CountItem = {
    0: useScrollCount(FIGURE_ITEMS[0].number, 2000, 1000, 'donw'),
    1: useScrollCount(FIGURE_ITEMS[1].number, 0, 1000),
    2: useScrollCount(JoinedNumber, 0, 1700),
  };
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
                <N.Number {...countItem[index]}>{0}</N.Number>
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
