import styled from 'styled-components';
import * as vars from '../styled/Variables';
import * as animation from '../styled/Animations';

export const LoaderHld = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: ${vars.AccentColorDarken};

  @media(max-width: 479px) {
    position: fixed;
  }
`;

export const LoaderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const BounceBallHld = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin: auto;
`;

export const BounceBall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  animation: ${animation.Bounce} 2.0s infinite ease-in-out;

  &:nth-of-type(2) {
    animation-delay: -1.0s;
  }
`;

