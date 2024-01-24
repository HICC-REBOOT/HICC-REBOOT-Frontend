import React from 'react';
import * as EI from './CommunityWrite.style';

interface EachImageProps {
  image: string;
}

function EachImage({ image }: EachImageProps) {
  return <EI.ImageView src={image} alt="image" />;
}

export default EachImage;
