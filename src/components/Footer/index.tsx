import logo from '../../assets/box-truck.png'
import { FooterContainer, FooterContent, Logo, TextContent } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>
          <img src={logo} alt="Caminhão" />
          <strong>Central Logistic</strong>
        </Logo>

        <TextContent>
          <div>
            <span>Obs:</span>
            <p>
              1- Usuários, o sistema é para adicionar entradas de mercadorias no
              estoque e saídas. Por exemplo: Empresa X enviou 100 produtos com o
              valor de 10 reais, você devera fazer o calculo do valor total da
              mercadoria, que vale 1000 reais e assim adicionar no campo de
              entrada. O mesmo vale para saídas, preste bem atenção se o calculo
              está correto.
            </p>
          </div>
          <div>
            <p>
              2- Se precisar de informações de saída, contabilidade do estoque,
              informações de notas e informações adicionais, procure seu
              supervisor para entrar em contato com o TI.
            </p>
          </div>
        </TextContent>
      </FooterContent>
    </FooterContainer>
  )
}
