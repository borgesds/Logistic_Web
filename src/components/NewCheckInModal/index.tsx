import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
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
            <ThirdTypeButton variant="yes">
              <span>Terceiro? Sim</span>
            </ThirdTypeButton>

            <ThirdTypeButton variant="no">
              <span>Terceiro? Não</span>
            </ThirdTypeButton>
          </ThirdType>

          <input type="text" placeholder="Nome do produto" required />

          <div>
            <span>Tipo do produto</span>

            <input
              type="radio"
              placeholder="Tipo do produto"
              value="Alimento"
              required
            />
            <label htmlFor="terceiro">Alimento</label>

            <input
              type="radio"
              placeholder="Tipo do produto"
              value="Industrial"
              required
            />
            <label htmlFor="terceiro">Industrial</label>

            <input
              type="radio"
              placeholder="Tipo do produto"
              value="Casa"
              required
            />
            <label htmlFor="terceiro">Casa</label>

            <input
              type="radio"
              placeholder="Tipo do produto"
              value="	Tecnologia"
              required
            />
            <label htmlFor="terceiro">Tecnologia</label>

            <input
              type="radio"
              placeholder="Tipo do produto"
              value="Outros"
              required
            />
            <label htmlFor="terceiro">Outros</label>
          </div>
          <input type="number" placeholder="Quantidade" required />
          <input type="number" placeholder="Valor unitário" required />
          <input type="number" placeholder="Valor Total" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
