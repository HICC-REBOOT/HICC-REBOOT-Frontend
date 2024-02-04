import Sheet from 'react-modal-sheet';
import React, { useState } from 'react';
import STYLE from '@constants/style';
import theme from '@styles/theme';
import { ConfigProvider } from 'antd';
import { useRecoilState } from 'recoil';
import { ReactComponent as CheckIcon } from '@assets/image/icon/check.svg';
import useModal from '@hooks/useCalendarModal';
import { ReactComponent as TrashIcon } from '@assets/image/icon/trash.svg';
import { ReactComponent as TimeIcon } from '@assets/image/icon/time.svg';
import { ReactComponent as TagIcon } from '@assets/image/icon/tag.svg';
import { ReactComponent as CommentIcon } from '@assets/image/icon/comment.svg';
import hexToRGBA from '@utils/hexToRgba';
import { modalState } from '../../state/calendar';
import DatePickerBox from './DatePicker';
import * as E from './style/EditModal.style';
import { ScheduleType } from './CalendarType';

export default function EditModal() {
  const { isModalOpen, changeModalState, isNewSchedule, changeIsNewState } = useModal();

  const [type, setType] = useRecoilState(scheduleTypeState);
  const [detail, setDetail] = useState<string>('');
  const handleDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value);
  };

  const closeModal = () => {
    changeModalState(false);
    changeIsNewState(false);
  };

  const onClickTypeButton = (selectedType: ScheduleType) => {
    switch (selectedType) {
      case 'ACADEMIC':
        setType('ACADEMIC');
        break;
      case 'AMITY':
        setType('AMITY');
        break;
      case 'SCHOOL_EVENT':
        setType('SCHOOL_EVENT');
        break;
      default:
        setType('ETC');
        break;
    }
  };
  return (
    <Sheet
      isOpen={isModalOpen}
      onClose={closeModal}
      snapPoints={[0.85]}
      style={{ zIndex: STYLE.Z_INDEX.CALENDAR_MODAL }}
    >
      <Sheet.Container
        style={{ backgroundColor: theme.colors.grey001, borderTopLeftRadius: '1.6rem', borderTopRightRadius: '1.6rem' }}
      >
        <Sheet.Header />
        <Sheet.Content>
          <E.Container>
            <E.Top>
              <E.TitleContainer>
                <E.Line type={type} />
                <E.Title
                  value={isNewSchedule ? '' : '주간 세미나'}
                  placeholder={isNewSchedule ? '일정 제목을 입력해주세요' : ''}
                />
              </E.TitleContainer>
              <E.deleteBtn>
                <TrashIcon />
              </E.deleteBtn>
            </E.Top>
            <E.Content>
              <E.Left>
                <E.ContentWrapper>
                  <TimeIcon />
                  <DatePickerBox />
                </E.ContentWrapper>
                <E.ContentWrapper>
                  <TagIcon />
                  <E.TypeButtonContainer>
                    <E.AcademicButton selected={type === 'ACADEMIC'} onClick={() => onClickTypeButton('ACADEMIC')}>
                      • 학술
                    </E.AcademicButton>
                    <E.AmityButton selected={type === 'AMITY'} onClick={() => onClickTypeButton('AMITY')}>
                      • 친목
                    </E.AmityButton>
                    <E.EventButton selected={type === 'SCHOOL_EVENT'} onClick={() => onClickTypeButton('SCHOOL_EVENT')}>
                      • 학교 행사
                    </E.EventButton>
                  </E.TypeButtonContainer>
                </E.ContentWrapper>
              </E.Left>
              <E.TextAreaContainer>
                <CommentIcon />
                <E.TextArea
                  rows={10}
                  value={detail}
                  placeholder={isNewSchedule ? '일정에 대한 설명을 입력해주세요' : ''}
                  onChange={handleDetail}
                />
              </E.TextAreaContainer>
            </E.Content>
            <E.CompleteBtn>
              <CheckIcon color={theme.colors.white} />
            </E.CompleteBtn>
          </E.Container>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={closeModal} style={{ backgroundColor: hexToRGBA(theme.colors.black, 0.7) }} />
    </Sheet>
  );
}
