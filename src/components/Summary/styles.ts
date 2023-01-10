import styled from 'styled-components'

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
`
export const SummaryCard = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 8px;
  box-shadow: 3px 5px 10px ${(props) => props.theme['gray-900']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 0.5rem;
  }
`
