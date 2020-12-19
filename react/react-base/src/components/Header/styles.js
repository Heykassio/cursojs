import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;
