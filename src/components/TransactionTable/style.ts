import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4rem;

  table {
    width: 100%; //table não ocupa toda a largura
    border-spacing: 0 0.5rem; //espaçamento

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      
      &:first-child{
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;

