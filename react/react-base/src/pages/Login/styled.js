import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  background-color: azure;
  small {
    font-size: 12px;
    margin-left: 20px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  font-size: 20px;
`;
