import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  background-color: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 1rem;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray.lighter};
    border-color: ${({ theme }) => theme.colors.gray.light};
    opacity: 1;
  }
`;
