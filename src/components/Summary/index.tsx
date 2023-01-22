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

  const summaryStock = dataCheckIn.reduce(
    (acc, dataCheckIn) => {
      acc.stockValue += dataCheckIn.totalValue

      acc.stockQuantity += dataCheckIn.amount

      return acc
    },
    {
      stockValue: 0,
      stockQuantity: 0,
    },
  )

  const summarySales = dataOutput.reduce(
    (acc, dataOutput) => {
      acc.salesAmount += dataOutput.totalValue

      acc.salesQuantity += dataOutput.amount

      for (
        const maxValue = dataOutput.totalValue;
        acc.biggestSale < maxValue;
        acc.biggestSale = maxValue
      ) {
        acc.biggestSale = maxValue
      }

      return acc
    },
    {
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

        <strong>{summaryStock.stockValue}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Qtd em Estoque</span>
          <Package size={32} color="#FF6B1A" />
        </header>

        <strong>{summaryStock.stockQuantity}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total em Vendas</span>
          <Coins size={32} color="#FF6B1A" />
        </header>

        <strong>{summarySales.salesAmount}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Quantidade Vendida</span>
          <Package size={32} color="#FF6B1A" />
        </header>

        <strong>{summarySales.salesQuantity}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Maior Venda</span>
          <CurrencyDollarSimple size={32} color="#FF6B1A" />
        </header>

        <strong>{summarySales.biggestSale}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
