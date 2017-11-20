import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as vars from '../styled/Variables';

export const ButtonsHld = styled.div`
  display: flex;
`;

export const Button = styled(Link)`
  flex: 1 1 auto;
  padding: 10px 15px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  text-align: center;
  text-decoration: none;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
`;

export const ButtonPrimary = Button.extend`
  background: #fff;
  color: ${vars.AccentColorDarken};

  ${Button} + & {
    margin-left: 10px;
  }
`;

export const ButtonsSmallHld = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -35px;
`;

export const ButtonSmall = styled.a`
  height: 28px;
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #e62117;
  background: #fff;
  color: #e62117;
  font-weight: 300;
  text-decoration: none;
  overflow: hidden;

  &:visited {
    color: #e62117;
  }
`;