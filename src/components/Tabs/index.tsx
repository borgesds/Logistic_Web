import { useContext } from 'react'
import { DataCheckContext } from '../../contexts/DataTrasactionsContext'
import {
  dataFormatter,
  numberFormatter,
  priceFormatter,
} from '../../utils/formatter'
import {
  DataTable,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  ThirdPartyProducts,
  TypeProducts,
} from './styles'

export function TabsTable() {
  const { dataCheckIn, dataOutput } = useContext(DataCheckContext)

  return (
    <TabsRoot defaultValue="tab1">
      <TabsList aria-label="Logistic">
        <TabsTrigger value="tab1">Estoque de Mercadorias</TabsTrigger>
        <TabsTrigger value="tab2">Saídas de Mercadorias</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <DataTable>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Número da nota</th>
              <th>Data de Emissão</th>
              <th>Terceiro</th>
              <th>Nome do produto</th>
              <th>Tipo do produto</th>
              <th>Quantidade</th>
              <th>Valor unitário</th>
              <th>Valor Total</th>
            </tr>
          </thead>

          <tbody>
            {dataCheckIn.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="30%">{item.company}</td>
                  <td>{item.number_invoice}</td>
                  <td>{dataFormatter.format(new Date(item.dateCheckin))}</td>
                  <ThirdPartyProducts variant={item.third}>
                    {item.third}
                  </ThirdPartyProducts>
                  <td>{item.nameProduct}</td>
                  <TypeProducts variant={item.typeProduct}>
                    {item.typeProduct}
                  </TypeProducts>
                  <td>{numberFormatter.format(item.amount)}</td>
                  <td>{priceFormatter.format(item.unitaryValue)}</td>
                  <td>{priceFormatter.format(item.totalValue)}</td>
                </tr>
              )
            })}
          </tbody>
        </DataTable>
      </TabsContent>
      <TabsContent value="tab2">
        <DataTable>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Número da nota</th>
              <th>Data de Emissão</th>
              <th>Terceiro</th>
              <th>Nome do produto</th>
              <th>Tipo do produto</th>
              <th>Quantidade</th>
              <th>Valor unitário</th>
              <th>Valor Total</th>
            </tr>
          </thead>

          <tbody>
            {dataOutput.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="30%">{item.company}</td>
                  <td>{item.number_invoice}</td>
                  <td>{dataFormatter.format(new Date(item.dateCheckin))}</td>
                  <ThirdPartyProducts variant={item.third}>
                    {item.third}
                  </ThirdPartyProducts>
                  <td>{item.nameProduct}</td>
                  <TypeProducts variant={item.typeProduct}>
                    {item.typeProduct}
                  </TypeProducts>
                  <td>{numberFormatter.format(item.amount)}</td>
                  <td>{priceFormatter.format(item.unitaryValue)}</td>
                  <td>{priceFormatter.format(item.totalValue)}</td>
                </tr>
              )
            })}
          </tbody>
        </DataTable>
      </TabsContent>
    </TabsRoot>
  )
}
