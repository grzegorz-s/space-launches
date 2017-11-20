import styled from 'styled-components';
import * as vars from '../styled/Variables';

export const AppBody = styled.div`
  position: relative;
  max-width: 375px;
  height: calc(100vh - 40px);
  max-height: 675px;
  margin: 20px auto;
  border-radius: 12px;
  background: ${vars.AccentColorDarken};
  box-shadow: 1px 1px 40px 1px rgba(0, 0, 0, 0.68);
  overflow: hidden;

  @media(max-width: 479px) {
    max-width: 100%;
    height: auto;
    max-height: none;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const AppBodyInner = styled.div`
  height: 100%;
  overflow: auto;
`;

export const Container = styled.div`
  padding: 0 10px;
`;