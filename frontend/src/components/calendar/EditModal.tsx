import Sheet from 'react-modal-sheet';
import React from 'react';
import STYLE from '@constants/style';
import theme from '@styles/theme';
import { useRecoilState } from 'recoil';
import { modalState } from '../../state/calendar';
import DatePickerBox from './DatePicker';
import TypeButton from './TypeButton';
import * as E from './style/EditModal.style';

export default function EditModal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const dateFormat = 'DD.MM E';

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      snapPoints={[0.85]}
      style={{ zIndex: STYLE.Z_INDEX.CALENDAR_MODAL }}
    >
      <Sheet.Container
        style={{ backgroundColor: '#141415', borderTopLeftRadius: '1.6rem', borderTopRightRadius: '1.6rem' }}
      >
        <Sheet.Header />
        <Sheet.Content>
          <E.Container>
            <E.Top>
              <E.TitleContainer>
                <E.Line />
                <E.Title value={'주간 세미나'} />
              </E.TitleContainer>
              <E.deleteBtn />
            </E.Top>
            <E.Content>
              <E.ContentWrapper>
                <E.Icon />
                <DatePickerBox />
              </E.ContentWrapper>
              <E.ContentWrapper>
                <E.Icon />
                <TypeButton />
              </E.ContentWrapper>
            </E.Content>
          </E.Container>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsOpen(false)} style={{ backgroundColor: 'rgba(20, 20, 21, 0.85)' }} />
    </Sheet>
  );
}
