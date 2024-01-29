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
import { modalState } from '../../state/calendar';
import DatePickerBox from './DatePicker';
import TypeButton from './TypeButton';
import * as E from './style/EditModal.style';

export default function EditModal() {
  const { isModalOpen, changeModalState, isNewSchedule, changeIsNewState } = useModal();

  const [detail, setDetail] = useState<string>('');
  const handleDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value);
  };

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
        style={{ backgroundColor: theme.colors.grey001, borderTopLeftRadius: '1.6rem', borderTopRightRadius: '1.6rem' }}
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
                  <TypeButton />
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
      <Sheet.Backdrop onTap={closeModal} style={{ backgroundColor: 'rgba(20, 20, 21, 0.85)' }} />
    </Sheet>
  );
}
