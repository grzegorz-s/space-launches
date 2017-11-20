import styled from 'styled-components';

export const DetailsHeader = styled.header`
  height: 70vh;
  background: url(${props => props.image ? props.image : '' }) top center no-repeat;
  background-size: cover;
`;

export const DetailsHeaderPlaceholder = styled.header`
  position: relative;
  height: 40vh;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
  }
`;