import { Modal } from 'antd';
import './withdrawal.style.css';

export interface WithdrawalParameter {
  title: string;
  content: string;
  okText: string;
  cancelText: string;
  isDangerous: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

function withdrawal({ title, content, okText, cancelText, isDangerous, onOk, onCancel }: WithdrawalParameter) {
  Modal.confirm({
    prefixCls: 'withdrawal',
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
    maskClosable: true,
  });
}

export default withdrawal;
