import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 40rem;
  border-radius: 8px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-700']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: row;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      min-width: 20rem;
      gap: 0.25rem;

      input {
        border-radius: 8px;
        border: 0;
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        padding: 0.5rem;

        &::placeholder {
          color: ${(props) => props.theme['gray-500']};
        }

        &:focus {
          border: 1px solid ${(props) => props.theme['orange-500']};
        }
      }
    }

    button[type='submit'] {
      height: 60px;
      border: 0;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      border-radius: 8px;
      padding: 0 1.25rem;
      margin-top: 1rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
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

export const ThirdType = styled(RadioGroup.Root)`
  margin-top: 1rem;
`

interface ThirdTypeButtonProps {
  variant: 'yes' | 'no'
}

export const ThirdTypeButton = styled(RadioGroup.Item)<ThirdTypeButtonProps>`
  background: ${(props) => props.theme['gray-600']};
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme['orange-500']};
  border-radius: 8px;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: bold;

  span {
    color: ${(props) =>
      props.variant === 'yes'
        ? props.theme['orange-700']
        : props.theme['green-500']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-700']};
    border: 1px solid ${(props) => props.theme['orange-700']};
  }

  /* deixar o botão selecionado quando clicar */
  &[data-state='checked'] {
    background: ${(props) =>
      props.variant === 'yes'
        ? props.theme['orange-700']
        : props.theme['green-500']};

    span {
      color: ${(props) => props.theme.white};
    }
  }
`

export const SpanTitle = styled.span`
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
`

export const ProductType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const DivProductType = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductTypeButton = styled(RadioGroup.Item)`
  background: ${(props) => props.theme['gray-600']};
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid ${(props) => props.theme['orange-500']};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  span {
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;
  }

  &:hover {
    background: ${(props) => props.theme['gray-700']};
    border: 1px solid ${(props) => props.theme['orange-700']};
  }

  /* deixar o botão selecionado quando clicar */
  &[data-state='checked'] {
    background: ${(props) => props.theme['orange-500']};
    border: 1px solid ${(props) => props.theme['orange-700']};

    span {
      color: ${(props) => props.theme.white};
    }
  }
`
