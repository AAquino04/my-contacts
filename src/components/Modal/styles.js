import styled from 'styled-components';

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 1.375rem;
    font-weight: 700;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray.dark
  )}
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  .cancel-button {
    background-color: transparent;
    border: none;
    padding: 0 16px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray.light}
  }
`;
