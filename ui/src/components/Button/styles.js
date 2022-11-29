import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: background-color 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: #cccccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
    background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }
  `}
`;
