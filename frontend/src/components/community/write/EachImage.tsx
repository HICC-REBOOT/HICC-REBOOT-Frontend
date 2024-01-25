import React from 'react';
import ImageView from './EachImage.style';

interface EachImageProps {
  image: string;
}

function EachImage({ image }: EachImageProps) {
  return <ImageView src={image} alt="image" />;
}

export default EachImage;
