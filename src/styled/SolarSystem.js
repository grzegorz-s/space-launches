import styled from 'styled-components';

export const Space = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  max-width: 400px;
  max-height: 160px;
  height: 40%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
`;

export const Earth = styled.div`
  width: 40%;
  max-width: 150px;
  position: absolute;
  top: 0;
  left: 20%;

  img {
    width: 100%;
  }
`;

export const Moon = styled.div`
  width: 10%;
  max-width: 60px;
  position: absolute;
  bottom: 0;
  left: 60%;

  img {
    width: 100%;
  }
`;