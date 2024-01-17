import { Modal } from 'antd';
import './CommonConfirm.css';

function confirm() {
  Modal.confirm({
    content: '안녕하세요',
    okText: '오케이',
    cancelText: '취소',
    onOk() {},
    onCancel() {},
  });
}

export default confirm;
