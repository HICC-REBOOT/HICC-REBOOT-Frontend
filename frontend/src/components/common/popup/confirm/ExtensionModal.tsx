import React from 'react';
import * as EM from './ExtensionModal.style';

interface ConfirmParameter {
  close: React.DispatchWithoutAction;
  title: string;
  content: React.JSX.Element;
  okText: string;
  cancelText: string;
  onOk: () => void;
  onCancel?: () => void;
}

function ExtensionModal({ close, title, content, okText, cancelText, onOk, onCancel }: ConfirmParameter) {
  const backdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    close();
  };

  const cancelAndClose = () => {
    if (onCancel !== undefined) {
      onCancel();
    }
    close();
  };

  const okAndClose = () => {
    onOk();
    close();
  };

  return (
    <EM.Backdrop onClick={backdropClick}>
      <EM.Container onClick={(event) => event.stopPropagation()}>
        <EM.Title>{title}</EM.Title>
        <EM.Content>{content}</EM.Content>
        <EM.Buttons>
          <EM.CancelButton onClick={cancelAndClose}>{cancelText}</EM.CancelButton>
          <EM.OkButton onClick={okAndClose}>{okText}</EM.OkButton>
        </EM.Buttons>
      </EM.Container>
    </EM.Backdrop>
  );
}

export default ExtensionModal;
