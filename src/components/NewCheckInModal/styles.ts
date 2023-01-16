import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 8px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-700']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 8px;
      border: 0;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 0.5rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 35px;
      border: 0;
      background: ${(props) => props.theme['orange-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      border-radius: 8px;
      padding: 0 1.25rem;
      margin-top: 1rem;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme['orange-700']};
        transition: background-color 0.2s;
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};

  &:hover {
    color: ${(props) => props.theme['red-500']};
  }
`
