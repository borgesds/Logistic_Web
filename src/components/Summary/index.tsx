import {
  Calculator,
  Coins,
  CurrencyDollarSimple,
  Package,
} from 'phosphor-react'
import { useContext } from 'react'
import { DataCheckContext } from '../../contexts/DataTrasactionsContext'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { dataCheckIn, dataOutput } = useContext(DataCheckContext)

  const summary = dataCheckIn.reduce(
    (acc, dataCheckIn) => {
      acc.stockValue += dataCheckIn.totalValue

      acc.stockQuantity += dataCheckIn.amount

      return acc
    },
    {
      stockValue: 0,
      stockQuantity: 0,
      salesAmount: 0,
      salesQuantity: 0,
      biggestSale: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Valor do Estoque</span>
          <Calculator size={32} color="#FF6B1A" />
        </header>

        <strong>{summary.stockValue}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Qtd em Estoque</span>
          <Package size={32} color="#FF6B1A" />
        </header>

        <strong>{summary.stockQuantity}</strong>
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
          <span>Quantidade Vendida</span>
          <Package size={32} color="#FF6B1A" />
        </header>

        <strong>1322335</strong>
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
