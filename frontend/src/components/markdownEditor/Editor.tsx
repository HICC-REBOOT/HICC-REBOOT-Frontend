import React, { useEffect, useRef } from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import './Editor.style.css';
import processNewImage from '@utils/image/processNewImage';

export type HookCallback = (url: string, text?: string) => void;

interface Props extends EditorProps {
  initialValue?: string;
  setContent: (content: string) => void;
}

const toolbar = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
  ['image', 'link'],
  ['scrollSync'],
];

function TuiEditor({ setContent, initialValue, ...restProps }: Props) {
  const isDesktop = window.innerWidth >= 768;
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const instance = editorRef.current.getInstance();
    instance.setMarkdown(initialValue ?? '내용을 입력해주세요');
  }, [editorRef, initialValue]);

  const handleChange = () => {
    if (!editorRef.current) return;

    const instance = editorRef.current.getInstance();
    const markdown = instance.getMarkdown();
    setContent(markdown);
  };

  const imageHandler = async (blob: File | Blob, callback: HookCallback) => {
    const file = blob as File;
    const imageUrl = await processNewImage(file);

    if (imageUrl) {
      callback(imageUrl, file.name);
    }
  };

  return (
    <Editor
      initialValue={initialValue ?? '내용을 입력해주세요'}
      onChange={handleChange}
      initialEditType="markdown"
      autofocus={false}
      previewHighlight={true}
      previewStyle={isDesktop ? 'vertical' : 'tab'}
      ref={editorRef}
      toolbarItems={toolbar}
      hideModeSwitch={true}
      height="500px"
      hooks={{ addImageBlobHook: imageHandler }}
      {...restProps}
    />
  );
}

export default TuiEditor;
