import logo from '../../assets/box-truck.png'
import { ButtonRegister, HeaderContainer, HeaderContent, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <strong>Central Logistic</strong>
          <img src={logo} alt="Caminhão" />
        </Logo>

        <ButtonRegister>
          <button>Registro Entrada</button>
          <button>Registro Saída</button>
        </ButtonRegister>
      </HeaderContent>
    </HeaderContainer>
  )
}
