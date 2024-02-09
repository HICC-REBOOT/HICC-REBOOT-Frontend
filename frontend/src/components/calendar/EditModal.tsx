import Sheet from 'react-modal-sheet';
import React, { useEffect, useState } from 'react';
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
import useGetCalendarEachInfo from '@query/get/useGetCalendarEachInfo';
import useInput from '@hooks/useInput';
import { modalState, scheduleTypeState } from '../../state/calendar';
import DatePickerBox from './DatePicker';
import * as E from './style/EditModal.style';
import { ScheduleType } from './CalendarType';

export default function EditModal() {
  const { isModalOpen, changeModalState, scheduleId, changeScheduleId } = useModal();

  const { data: scheduleInfo } = useGetCalendarEachInfo({ scheduleId });

  const [title, setTitle] = useInput<string>('');
  const [type, setType] = useRecoilState(scheduleTypeState);
  const [detail, setDetail] = useState<string>('');
  const handleDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value);
  };

  const closeModal = () => {
    changeModalState(false);
    changeScheduleId(-1);
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

  useEffect(() => {
    if (scheduleId !== -1) {
      setTitle(scheduleInfo?.name as string);
      setDetail(scheduleInfo?.content as string);
      setType(scheduleInfo?.type ?? 'ACADEMIC');
    } else {
      setTitle('');
      setDetail('');
      setType('ACADEMIC');
    }
  }, [scheduleId]);

  const onClickCompleteBtn = () => {
    console.log(title);
    console.log(detail);
    console.log(type);
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
                  onChange={setTitle}
                  value={title}
                  placeholder={scheduleId === -1 ? '일정 제목을 입력해주세요' : ''}
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
                  <DatePickerBox
                    startDateTime={scheduleInfo?.startDateTime as string}
                    endDateTime={scheduleInfo?.endDateTime as string}
                    scheduleId={scheduleInfo?.scheduleId}
                  />
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
                  placeholder={scheduleId === -1 ? '일정에 대한 설명을 입력해주세요' : ''}
                  onChange={handleDetail}
                />
              </E.TextAreaContainer>
            </E.Content>
            <E.CompleteBtn onClick={onClickCompleteBtn}>
              <CheckIcon color={theme.colors.white} />
            </E.CompleteBtn>
          </E.Container>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={closeModal} style={{ backgroundColor: hexToRGBA(theme.colors.black, 0.7) }} />
    </Sheet>
  );
}
