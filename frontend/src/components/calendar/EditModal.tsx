import Sheet from 'react-modal-sheet';
import React, { useEffect, useState } from 'react';
import STYLE from '@constants/style';
import theme from '@styles/theme';
import { useRecoilState, useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import useModal from '@hooks/useCalendarModal';

import CheckIcon from '@assets/image/icon/check.svg?react';
import TrashIcon from '@assets/image/icon/trash.svg?react';
import TimeIcon from '@assets/image/icon/time.svg?react';
import TagIcon from '@assets/image/icon/tag.svg?react';
import CommentIcon from '@assets/image/icon/comment.svg?react';

import hexToRGBA from '@utils/hexToRgba';
import useGetCalendarEachInfo from '@query/get/useGetCalendarEachInfo';
import useInput from '@hooks/useInput';
import usePostSchedule from '@query/post/usePostSchedule';
import usePatchSchedule from '@query/patch/usePatchSchedule';
import useDeleteSchedule from '@query/delete/useDeleteSchedule';
import withdrawal, { WithdrawalParameter } from '@components/common/popup/withdrawal/withdrawal';
import { ConfigProvider } from 'antd';
import { endTimeState, scheduleTypeState, startTimeState } from '../../state/calendar';
import DatePickerBox from './DatePicker';
import * as E from './style/EditModal.style';

export default function EditModal() {
  const { isModalOpen, changeModalState, scheduleId, changeScheduleId } = useModal();

  const [title, setTitle] = useInput<string>('');
  const [type, setType] = useRecoilState(scheduleTypeState);
  const [detail, setDetail] = useState<string>('');
  const startTime = useRecoilValue(startTimeState);
  const endTime = useRecoilValue(endTimeState);

  const { data: scheduleInfo } = useGetCalendarEachInfo({ scheduleId });
  const { postSchedule, isPending: isPostSchedulePending } = usePostSchedule();
  const { deleteSchedule, isPending: isDeleteSchedulePending } = useDeleteSchedule();
  const { updateSchedule, isPending: isPatchSchedulePending } = usePatchSchedule();

  const handleDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value);
  };

  const closeModal = () => {
    changeModalState(false);
    changeScheduleId(-1);
    setTitle('');
    setDetail('');
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

  const checkValidity = () => {
    if (title.trim().length === 0) {
      alert('일정 제목을 입력해주세요.');
      return false;
    }
    if (detail.trim().length === 0) {
      alert('일정 설명을 입력해주세요.');
      return false;
    }
    if (dayjs(startTime) > dayjs(endTime)) {
      alert('일정 시간을 다시 입력해주세요.');
      return false;
    }
    return true;
  };

  const onClickCompleteBtn = () => {
    if (!checkValidity()) return null;

    // 일정 추가일 때
    if (scheduleId === -1) {
      if (isPostSchedulePending) return null;
      postSchedule({
        name: title,
        startDateTime: dayjs(startTime).format('YYYY-MM-DD HH:mm:ss'),
        endDateTime: dayjs(endTime).format('YYYY-MM-DD HH:mm:ss'),
        type,
        content: detail,
      });
    }
    // 일정 수정일 때
    else {
      if (isPatchSchedulePending) return null;
      updateSchedule({
        name: title,
        startDateTime: dayjs(startTime).format('YYYY-MM-DD HH:mm:ss'),
        endDateTime: dayjs(endTime).format('YYYY-MM-DD HH:mm:ss'),
        type,
        content: detail,
        scheduleId,
      });
    }
    closeModal();
    return null;
  };

  const onClickDeleteBtn = () => {
    const withDrawalComfirmParams: WithdrawalParameter = {
      title: '일정을 삭제하시겠습니까?',
      content: '',
      okText: '삭제',
      cancelText: '취소',
      isDangerous: true,
      onOk: () => {
        deleteSchedule(scheduleId);
        closeModal();
      },
    };

    withdrawal(withDrawalComfirmParams);
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
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: theme.colors.black,
                      colorBgContainer: theme.colors.black,
                      colorText: theme.colors.white,
                      lineWidth: 0,
                      colorTextPlaceholder: theme.colors.grey004,
                    },
                  }}
                >
                  <E.Title
                    onChange={setTitle}
                    value={title}
                    placeholder={scheduleId === -1 ? '일정 제목을 입력해주세요' : ''}
                    showCount
                    maxLength={30}
                  />
                </ConfigProvider>
              </E.TitleContainer>
              {scheduleId !== -1 && (
                <E.deleteBtn onClick={onClickDeleteBtn}>
                  <TrashIcon />
                </E.deleteBtn>
              )}
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
                    <E.AcademicButton selected={type === 'ACADEMIC'} onClick={() => setType('ACADEMIC')}>
                      • 학술
                    </E.AcademicButton>
                    <E.AmityButton selected={type === 'AMITY'} onClick={() => setType('AMITY')}>
                      • 친목
                    </E.AmityButton>
                    <E.EventButton selected={type === 'SCHOOL_EVENT'} onClick={() => setType('SCHOOL_EVENT')}>
                      • 학교 행사
                    </E.EventButton>
                  </E.TypeButtonContainer>
                </E.ContentWrapper>
              </E.Left>
              <E.TextAreaContainer>
                <CommentIcon />
                <ConfigProvider
                  theme={{
                    token: {
                      colorBgContainer: theme.colors.black,
                      colorText: theme.colors.grey004,
                      lineWidth: 0,
                      colorTextPlaceholder: theme.colors.grey004,
                      fontSize: 10,
                    },
                  }}
                >
                  <E.DetailTextArea
                    rows={10}
                    value={detail}
                    placeholder={scheduleId === -1 ? '일정에 대한 설명을 입력해주세요' : ''}
                    onChange={handleDetail}
                    showCount
                    maxLength={300}
                  />
                </ConfigProvider>
              </E.TextAreaContainer>
            </E.Content>
            <E.CompleteBtn onClick={onClickCompleteBtn}>
              <CheckIcon style={{ color: theme.colors.white }} />
            </E.CompleteBtn>
          </E.Container>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={closeModal} style={{ backgroundColor: hexToRGBA(theme.colors.black, 0.7) }} />
    </Sheet>
  );
}
