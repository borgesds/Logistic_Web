import logo from '../../assets/box-truck.png'
import { ButtonRegister, HeaderContainer, HeaderContent, Logo } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewCheckInModal } from '../NewCheckInModal'
import { NewCheckoutModal } from '../NewCheckoutModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <strong>Central Logistic</strong>
          <img src={logo} alt="Caminhão" />
        </Logo>

        <ButtonRegister>
          {/* Botão com modal */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Registro Entrada</button>
            </Dialog.Trigger>

            {/* conteúdo modal */}
            <NewCheckInModal />
          </Dialog.Root>

          {/* Botão com modal */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Registro Saída</button>
            </Dialog.Trigger>

            {/* conteúdo modal */}
            <NewCheckoutModal />
          </Dialog.Root>
        </ButtonRegister>
      </HeaderContent>
    </HeaderContainer>
  )
}
