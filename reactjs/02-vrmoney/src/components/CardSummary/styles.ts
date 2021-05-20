import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: var(--border-radius);
  color: var(--text-title);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  &.highlight-background {
    background: var(--green);
    color: var(--shape);
  }
`;
