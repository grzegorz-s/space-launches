import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin: 1em 0;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.08em;
`;

export const Title = styled.h3`
  margin: 1em 0;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`; 
export const DateText = styled.p`
  margin: 0;
`;

export const UnorderedList = styled.ul`
  margin: 1.5em 0;
  padding: 0 10px;
  list-style-type: none;

  li {
    position: relative;
    margin: 0.4em 0;
    padding-left: 35px;
    font-weight: 300;
    line-height: 1.1;

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 8px;
      width: 10px;
      height: 1px;
      background: #fff;
    }
  }

  a {
    position: relative;
    color: #fff;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #fff;
    }
  }
`;