import { Modal } from 'antd';
import './CommonConfirm.css';

interface ConfirmParameter {
  content: string;
  okText: string;
  cancelText: string;
  onOk: () => void;
  onCancel?: () => void;
}

function confirm({ content, okText, cancelText, onOk, onCancel }: ConfirmParameter) {
  Modal.confirm({
    content,
    okText,
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
