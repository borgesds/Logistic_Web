import { useContext } from 'react'
import { DataTransactionContext } from '../../contexts/DataTrasactionsContext'
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
  const { dataCheckIn } = useContext(DataTransactionContext)

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
            {dataCheckIn.map((dataCheckIn) => {
              return (
                <tr key={dataCheckIn.id}>
                  <td width="20%">{dataCheckIn.company}</td>
                  <td>{dataCheckIn.number_invoice}</td>
                  <td>{dataCheckIn.dateCheckin}</td>
                  <ThirdPartyProducts variant={dataCheckIn.third}>
                    {dataCheckIn.third}
                  </ThirdPartyProducts>
                  <td>{dataCheckIn.nameProduct}</td>
                  <TypeProducts variant={dataCheckIn.typeProduct}>
                    {dataCheckIn.typeProduct}
                  </TypeProducts>
                  <td>{dataCheckIn.amount}</td>
                  <td>{dataCheckIn.unitaryValue}</td>
                  <td>{`R$ ${dataCheckIn.totalValue}`}</td>
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
            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="no">Não</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="no">Não</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>
            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="no">Não</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>
            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="no">Não</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>
            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="30%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="no">Não</ThirdPartyProducts>
              <td>Nome do produto</td>
              <td>Alimento</td>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>
          </tbody>
        </DataTable>
      </TabsContent>
    </TabsRoot>
  )
}
