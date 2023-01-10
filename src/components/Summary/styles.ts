import styled from 'styled-components'

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;

  background: ${(props) => props.theme['gray-700']};
`
