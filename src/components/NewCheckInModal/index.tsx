import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'

export function NewCheckInModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Registro Entrada</Dialog.Title>

        <form action="">
          <input type="text" placeholder="Empresa" required />
          <input type="number" placeholder="Número da nota" required />
          <input type="date" placeholder="Data de Emissão" required />
          <input type="radio" placeholder="Terceiro" required />
          <input type="text" placeholder="Nome do produto" required />
          <input type="radio" placeholder="Tipo do produto" required />
          <input type="number" placeholder="Quantidade" required />
          <input type="number" placeholder="Valor unitário" required />
          <input type="number" placeholder="Valor Total" required />

          <button type="submit">Cadastrar</button>
        </form>

        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  )
}
