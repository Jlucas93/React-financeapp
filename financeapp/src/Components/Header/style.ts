import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--blue-light);
    border: 0;
    color: #fff;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
