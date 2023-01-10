import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-top: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  strong {
    font-size: 2rem;
    color: ${(props) => props.theme['orange-500']};
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const ButtonRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-left: 4rem;

  button {
    height: 40px;
    border: 0;
    background: ${(props) => props.theme['orange-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['orange-700']};
      transition: background 0.2s;
    }
  }
`
