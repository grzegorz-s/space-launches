import styled from 'styled-components';
import * as vars from '../styled/Variables';
import Stars from '../assets/images/background.png';

export const AppBody = styled.div`
  width: 100%;
  border-radius: 8px;
  background: ${vars.AccentColorDarken};
`;

export const Header = styled.header`
  position: relative;
  height: 45vh;
  background: linear-gradient(to bottom, #382146, 80%, ${vars.AccentColorDarken});

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${Stars}) top left repeat;
  }
`;