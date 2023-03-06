import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s forwards; // Forwards retains keyframe's "to" styles

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.2s forwards;`}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  animation: ${scaleIn} 0.3s forwards;

  ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.2s forwards;`}

  > h1 { /* Applied only to direct children */
    font-size: 1.375rem;
    font-weight: 700;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray.dark
  )}
  }

  .modal-body {
    margin-top: 32px;
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
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.gray.light};

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
