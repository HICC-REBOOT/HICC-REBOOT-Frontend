import { Modal } from 'antd';
import './CommonConfirm.css';

interface ConfirmParameter {
  content: string;
  okText: string;
  cancelText: string;
  isDangerous: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

function confirm({ content, okText, cancelText, isDangerous, onOk, onCancel }: ConfirmParameter) {
  Modal.confirm({
    prefixCls: 'Confirm',
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

export default confirm;
