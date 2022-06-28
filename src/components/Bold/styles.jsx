import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ primary }) => (primary ? '#1C1C1C' : '#969cb3')};

  white-space: nowrap;
  outline: none;
  border: none;

  width: 2rem;
  height: 2rem;
  cursor: pointer;

  text-decoration: none;
  transition: 0.3s;
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 5px;

  color: ${({ primary }) => (primary ? '#FFF' : '#363f5f')};

  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    background: #969cb3;
    transform: translateY(-2px);
  }
`;