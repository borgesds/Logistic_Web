import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  DivProductType,
  Overlay,
  ProductType,
  ProductTypeButton,
  SpanTitle,
  ThirdType,
  ThirdTypeButton,
} from './styles'

export function NewCheckInModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Registro Entrada</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Empresa" required />
          <input type="number" placeholder="Número da nota" required />
          <input type="date" placeholder="Data de Emissão" required />

          <ThirdType>
            <ThirdTypeButton variant="yes" value="sim">
              <span>Terceiro? Sim</span>
            </ThirdTypeButton>

            <ThirdTypeButton variant="no" value="não">
              <span>Terceiro? Não</span>
            </ThirdTypeButton>
          </ThirdType>

          <input type="text" placeholder="Nome do produto" required />

          <SpanTitle>Tipo do produto</SpanTitle>

          <ProductType>
            <DivProductType>
              <ProductTypeButton value="Alimento">
                <span>Alimento</span>
              </ProductTypeButton>

              <ProductTypeButton value="Industrial">
                <span>Industrial</span>
              </ProductTypeButton>

              <ProductTypeButton value="Casa">
                <span>Casa</span>
              </ProductTypeButton>
            </DivProductType>

            <DivProductType>
              <ProductTypeButton value="Tecnologia">
                <span>Tecnologia</span>
              </ProductTypeButton>

              <ProductTypeButton value="Outros">
                <span>Outros</span>
              </ProductTypeButton>
            </DivProductType>
          </ProductType>

          <input type="number" placeholder="Quantidade" required />
          <input type="number" placeholder="Valor unitário" required />
          <input type="number" placeholder="Valor Total" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
