import logo from '../../assets/box-truck.png'
import { ButtonRegister, HeaderContainer, HeaderContent, Logo } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewCheckInModal } from '../NewCheckInModal'

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

          <button>Registro Saída</button>
        </ButtonRegister>
      </HeaderContent>
    </HeaderContainer>
  )
}
