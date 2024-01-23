import Sheet from 'react-modal-sheet';
import React from 'react';
import STYLE from '@constants/style';
import theme from '@styles/theme';
import { ConfigProvider } from 'antd';
import { useRecoilState } from 'recoil';
import CompleteBtn from '@assets/image/Icon_large.svg';
import useModal from '@hooks/useCalendarModal';
import { modalState } from '../../state/calendar';
import DatePickerBox from './DatePicker';
import TypeButton from './TypeButton';
import * as E from './style/EditModal.style';

export default function EditModal() {
  const { isModalOpen, changeModalState, isNewSchedule, changeIsNewState } = useModal();

  const closeModal = () => {
    changeModalState(false);
    changeIsNewState(false);
  };

  return (
    <Sheet
      isOpen={isModalOpen}
      onClose={closeModal}
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
                <E.Title
                  value={isNewSchedule ? '' : '주간 세미나'}
                  placeholder={isNewSchedule ? '일정 제목을 입력해주세요' : ''}
                />
              </E.TitleContainer>
              <E.deleteBtn />
            </E.Top>
            <E.Content>
              <E.Left>
                <E.ContentWrapper>
                  <E.Icon />
                  <DatePickerBox />
                </E.ContentWrapper>
                <E.ContentWrapper>
                  <E.Icon />
                  <TypeButton />
                </E.ContentWrapper>
              </E.Left>
              <E.TextAreaContainer>
                <E.Icon />
                <ConfigProvider
                  theme={{
                    token: {
                      borderRadius: 8,
                      colorBgContainer: theme.colors.black,
                      colorBorder: theme.colors.black,
                      colorPrimary: theme.colors.black,
                      colorText: 'rgba(255, 255, 255, 0.70)',
                      colorTextPlaceholder: 'rgba(255, 255, 255, 0.50)',
                    },
                    components: {
                      Input: {
                        activeBorderColor: theme.colors.black,
                        activeBg: theme.colors.black,
                      },
                    },
                  }}
                >
                  <E.CustomTextArea
                    rows={10}
                    value={isNewSchedule ? '' : '일정 설명입니당'}
                    placeholder={isNewSchedule ? '일정에 대한 설명을 입력해주세요' : ''}
                  />
                </ConfigProvider>
              </E.TextAreaContainer>
            </E.Content>
            <E.CompleteBtn src={CompleteBtn} />
          </E.Container>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={closeModal} style={{ backgroundColor: 'rgba(20, 20, 21, 0.85)' }} />
    </Sheet>
  );
}
