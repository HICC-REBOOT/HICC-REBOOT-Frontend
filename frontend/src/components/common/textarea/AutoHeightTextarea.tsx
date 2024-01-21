import React, { useRef, useCallback } from 'react';
import Textarea from './AutoHeightTextarea.style';

interface ITextarea {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function AutoHeightTextarea(props: ITextarea) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const handleResize = useCallback(() => {
    if (textRef.current !== null) {
      textRef.current.style.height = '0rem';
      textRef.current.style.height = `${textRef.current.scrollHeight / 10}rem`;
    }
  }, []);

  return (
    <Textarea
      ref={textRef}
      placeholder={props.placeholder}
      value={props.value}
      onInput={handleResize}
      onChange={props.onChange}
    />
  );
}

export default AutoHeightTextarea;
