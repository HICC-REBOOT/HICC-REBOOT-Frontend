import React from 'react';
import * as A from './style/Admin.style';

function Admin() {
  return (
    <A.Container>
      <A.MembersBox>
        <A.CategoryBox>
          <A.MajorDivision>Major</A.MajorDivision>
          <A.NameDivision>Name</A.NameDivision>
          <A.StateDivision>State</A.StateDivision>
        </A.CategoryBox>
        <A.MemberBox>
          <A.Major>캠퍼스자율전공(서울)</A.Major>
          <A.Name>최세호</A.Name>
          <A.State>
            <A.StateText>대기</A.StateText>
          </A.State>
        </A.MemberBox>
      </A.MembersBox>
    </A.Container>
  );
}

export default Admin;
