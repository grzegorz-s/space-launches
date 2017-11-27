import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardsHld = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Card = styled(Link)`
  display: block;
  margin-bottom: 20px;
  padding: 17.5px;
  border-radius: 8px;
  background: #FBFBFB;
  color: #000;
  text-decoration: none;
  box-shadow: 0px 0px 35px 6px rgba(255,255,255,0.1);
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const CardFlag = styled.div`
  width: 30px;
  height: 30px;
  img {
    border-radius: 50%;
    box-shadow: 2px 5px 5px 0 rgba(0,0,0, 0.15);
  }
`;

export const CardDate = styled.p`
  font-size: 12px;
  text-transform: uppercase;
`;

export const CardTitle = styled.h3`
  margin: 15px 0 0;
  font-size: 16px;
`;

