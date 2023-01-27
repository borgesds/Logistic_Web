import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface dataInput {
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

interface dataInputTransaction {
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

/* dataCheckIn e dataOutput */
interface DataTransactionContextType {
  dataCheckIn: dataInput[]
  dataOutput: dataInput[]
  createDataInputCheckIn: (data: dataInput) => Promise<void>
  createDataInputOutput: (data: dataInput) => Promise<void>
}

/* 
Esse é o valor que vai ser enviado, como:
const { dataCheckIn } = useContext(DDataCheckContext)
*/
export const DataCheckContext = createContext({} as DataTransactionContextType)

interface dataTransactionProviderProps {
  children: ReactNode
}

/* vamos chamar a função por volta do <Home /> */
export function DataTransactionProvider({
  children,
}: dataTransactionProviderProps) {
  const [dataCheckIn, setDataCheckIn] = useState<dataInput[]>([])
  const [dataOutput, setDataOutput] = useState<dataInput[]>([])

  /* dataCheckIn */
  const loadDataCheckIn = useCallback(async () => {
    const response = await api.get('/checkin', {
      params: {
        _sort: 'dateCheckin',
        _order: 'desc',
      },
    })

    setDataCheckIn(response.data)
  }, [])

  /* dataOutput */
  const loadDataOutput = useCallback(async () => {
    const response = await api.get('/output', {
      params: {
        _sort: 'dateCheckin',
        _order: 'desc',
      },
    })
    setDataOutput(response.data)
  }, [])

  /* Inputs create CheckIn */
  const createDataInputCheckIn = useCallback(
    async (data: dataInputTransaction) => {
      const {
        company,
        nameProduct,
        number_invoice,
        dateCheckin,
        third,
        typeProduct,
        amount,
        unitaryValue,
        totalValue,
      } = data

      const response = await api.post('/checkin', {
        company,
        nameProduct,
        number_invoice,
        dateCheckin,
        third,
        typeProduct,
        amount,
        unitaryValue,
        totalValue,
      })

      /* Assim que enviar o form atualizar a tabela */
      setDataOutput((state) => [response.data, ...state])
    },
    [],
  )

  /* Inputs create Output */
  const createDataInputOutput = useCallback(
    async (data: dataInputTransaction) => {
      const {
        company,
        nameProduct,
        number_invoice,
        dateCheckin,
        third,
        typeProduct,
        amount,
        unitaryValue,
        totalValue,
      } = data

      const response = await api.post('/output', {
        company,
        nameProduct,
        number_invoice,
        dateCheckin,
        third,
        typeProduct,
        amount,
        unitaryValue,
        totalValue,
      })

      /* Assim que enviar o form atualizar a tabela */
      setDataCheckIn((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    loadDataCheckIn()
    loadDataOutput()
  }, [loadDataCheckIn, loadDataOutput])

  return (
    <>
      <DataCheckContext.Provider
        value={{
          dataCheckIn,
          dataOutput,
          createDataInputCheckIn,
          createDataInputOutput,
        }}
      >
        {children}
      </DataCheckContext.Provider>
    </>
  )
}
