import { useEffect, useState } from 'react'
import {
  DataTable,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  ThirdPartyProducts,
  TypeProducts,
} from './styles'

interface dataCheckInInput {
  id: number
  company: string
  number_invoice: string
  dateCheckin: string
  third: 'yes' | 'no'
  nameProduct: string
  typeProduct:
    | 'food'
    | 'industrial'
    | 'house'
    | 'public'
    | 'technology'
    | 'others'
  amount: number
  unitaryValue: number
  totalValue: number
}

export function TabsTable() {
  const [dataCheckIn, setDataCheckIn] = useState<dataCheckInInput[]>([])

  async function loadDataCheckIn() {
    const response = await fetch('http://localhost:3333/checkin')
    const data = await response.json()
    setDataCheckIn(data)
  }

  useEffect(() => {
    loadDataCheckIn()
  }, [])

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
            <tr>
              <td width="20%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <TypeProducts variant="food">Alimento</TypeProducts>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="20%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="no">Não</ThirdPartyProducts>
              <td>Nome do produto</td>
              <TypeProducts variant="industrial">Industrial</TypeProducts>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="20%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <TypeProducts variant="house">Casa</TypeProducts>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="20%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="no">Não</ThirdPartyProducts>
              <td>Nome do produto</td>
              <TypeProducts variant="technology">Tecnologia</TypeProducts>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>
            <tr>
              <td width="20%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <TypeProducts variant="others">Outros</TypeProducts>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>

            <tr>
              <td width="20%">Empresa</td>
              <td>1213243355</td>
              <td>22-12-2022</td>
              <ThirdPartyProducts variant="yes">Sim</ThirdPartyProducts>
              <td>Nome do produto</td>
              <TypeProducts variant="others">Outros</TypeProducts>
              <td>Quantidade</td>
              <td>Valor unitário</td>
              <td>Valor Total</td>
            </tr>
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
