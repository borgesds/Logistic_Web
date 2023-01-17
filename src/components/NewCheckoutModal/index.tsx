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

export function NewCheckoutModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Registro Entrada</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <div>
            <input type="text" placeholder="Empresa" required />
            <input type="text" placeholder="Nome do produto" required />
            <input type="number" placeholder="Número da nota" required />
            <input type="date" placeholder="Data de Emissão" required />

            <ThirdType>
              <SpanTitle>Fornecedor</SpanTitle>
              <ThirdTypeButton variant="yes" value="sim">
                <span>Terceiro? Sim</span>
              </ThirdTypeButton>

              <ThirdTypeButton variant="no" value="não">
                <span>Terceiro? Não</span>
              </ThirdTypeButton>
            </ThirdType>
          </div>

          <div>
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

            <div>
              <button type="submit">Cadastrar</button>
            </div>
          </div>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
