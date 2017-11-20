import styled from 'styled-components';

export const CounterElementHld = styled.div`
  display: flex;
`;

export const CounterElement = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  font-size: 23px;

  & + & {
    margin-left: 5px;
  }
`;

export const CounterElementText = styled.span`
  font-size: 15px;
  font-weight: 300;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
`;
