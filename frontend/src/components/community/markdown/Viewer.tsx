import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import './Viewer.style.css';

type TuiEditorProps = {
  content?: string;
};

const TuiViewer = ({ content }: TuiEditorProps) => {
  return <Viewer initialValue={content} theme="white" />;
};

export default TuiViewer;
