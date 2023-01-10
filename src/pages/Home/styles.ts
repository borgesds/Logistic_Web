import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;

  div {
    padding: 1rem;
    background: ${(props) => props.theme['gray-900']};
    border-radius: 8px;
  }
`
