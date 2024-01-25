import styled from 'styled-components';

const ImageView = styled.img`
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  margin-right: 1rem;

  border-radius: 1rem;
  object-fit: cover;

  ${(props) => props.theme.media.tablet`
    width: 8rem;
    height: 8rem;
  `};

  ${(props) => props.theme.media.desktop`
    width: 10rem;
    height: 10rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 10rem;
    height: 10rem;
  `};
`;

export default ImageView;
