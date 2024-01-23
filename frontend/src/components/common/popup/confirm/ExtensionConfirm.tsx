import React from 'react';
import { Modal } from 'antd';
import './ExtensionConfirm.css';

interface ConfirmParameter {
  title: string;
  content: React.JSX.Element;
  okText: string;
  cancelText: string;
  isDangerous: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

function extensionConfirm({ title, content, okText, cancelText, isDangerous, onOk, onCancel }: ConfirmParameter) {
  Modal.confirm({
    prefixCls: 'Extension-Confirm',
    title,
    content,
    okText,
    okButtonProps: { danger: isDangerous },
    cancelText,
    onOk() {
      onOk();
    },
    onCancel() {
      if (onCancel !== undefined) {
        onCancel();
      }
    },
  });
}

export default extensionConfirm;
