import React from 'react';
import { Modal } from 'antd';
import './CommonConfirm.css';

interface ConfirmParameter {
  content: string;
  okText: string;
  cancelText: string;
  isDangerous: boolean;
  onOk: () => void;
  onCancel?: () => void;
  close?: React.DispatchWithoutAction;
}

function confirm({ content, okText, cancelText, isDangerous, onOk, onCancel, close }: ConfirmParameter) {
  Modal.confirm({
    prefixCls: 'Confirm',
    content,
    okText,
    okButtonProps: { danger: isDangerous },
    cancelText,
    onOk() {
      onOk();
      if (close !== undefined) {
        close();
      }
    },
    onCancel() {
      if (onCancel !== undefined) {
        onCancel();
      }
    },
    maskClosable: true,
  });
}

export default confirm;
