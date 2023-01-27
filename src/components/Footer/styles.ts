import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme['gray-900']};
  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterContent = styled.div`
  width: 100%;
  height: 280px;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;

  strong {
    font-size: 1rem;
    color: ${(props) => props.theme['orange-500']};
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`
export const TextContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  span {
    font-weight: bold;
    color: ${(props) => props.theme['orange-500']};
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    font-style: italic;
    padding: 1rem;
  }
`
