import React, { useReducer, useState } from 'react';
import RadioGroup from '@components/common/radio/RadioGroup';
import RadioType from '@components/common/radio/RadioType';
import ExtensionModal from '@components/common/popup/confirm/ExtensionModal';
import confirm from '@components/common/popup/confirm/Confirm';

function Temp3() {
  const [option, setOption] = useState<RadioType | undefined>();
  const [modalOpen, setIsModalOpen] = useReducer((prev: boolean) => !prev, false);

  const options: RadioType[] = [
    {
      tag: '필수',
      disabled: false,
      label: '1번입니다.',
      value: '1',
    },
    {
      tag: '필수',
      disabled: false,
      label: '2번입니다.',
      value: '2',
      warning: '*강제 탈퇴 이후 회원 목록으로 복귀할 수 없습니다.',
    },
    {
      tag: '필수',
      disabled: true,
      label: '3번입니다.',
      value: '3',
    },
  ];

  const popup = () => {
    confirm({
      content: '정말 탈퇴?',
      okText: '탈퇴',
      cancelText: '취소',
      isDangerous: true,
      onOk: () => console.log('d'),
      close: setIsModalOpen,
    });
  };

  const modalInfo = {
    close: setIsModalOpen,
    title: '[회원] 장윤영 님에 대한 회원 정보를 수정합니다.',
    content: <RadioGroup options={options} currentOption={option} setCurrentOption={setOption} />,
    okText: '확인',
    cancelText: '취소',
    onOk: popup,
  };

  return (
    <>
      <div style={{ height: '50rem' }}>
        <button style={{ fontSize: '10rem' }} onClick={setIsModalOpen}>
          클릭
        </button>
        <RadioGroup options={options} currentOption={option} setCurrentOption={setOption} />
      </div>
      {modalOpen && <ExtensionModal {...modalInfo} />}
    </>
  );
}

export default Temp3;
