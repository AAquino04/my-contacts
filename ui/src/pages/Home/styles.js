import styled from 'styled-components';

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background-color: #fff;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray.light};
    }
  }
`;

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    font-size: 1rem;
    text-decoration: none;
    font-weight: 700;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transition: transform 0.2s ease-in;
      transform: rotate(${({ order }) => (order === 'asc' ? '180deg' : '0')})
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Card + Card selector equivalent */
  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: 700;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray.light};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    a {
      height: 26px;
    }

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
