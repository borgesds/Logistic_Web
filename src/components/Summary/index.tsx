import {
  Calculator,
  Cardholder,
  Coins,
  CurrencyDollarSimple,
  Package,
} from 'phosphor-react'
import { useContext } from 'react'
import { DataCheckContext } from '../../contexts/DataTrasactionsContext'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { dataCheckIn } = useContext(DataCheckContext)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Valor do Estoque</span>
          <Calculator size={32} color="#FF6B1A" />
        </header>

        <strong>R$ 193002,80</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Quantidade em Estoque</span>
          <Package size={32} color="#FF6B1A" />
        </header>

        <strong>1322335</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total em Vendas</span>
          <Coins size={32} color="#FF6B1A" />
        </header>

        <strong>R$ 127002,80</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Quantidade Total</span>
          <Package size={32} color="#FF6B1A" />
        </header>

        <strong>1322335</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Quantidade de vendas</span>
          <Cardholder size={32} color="#FF6B1A" />
        </header>

        <strong>R$ 193002,80</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Maior Venda</span>
          <CurrencyDollarSimple size={32} color="#FF6B1A" />
        </header>

        <strong>R$ 6788,80</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
