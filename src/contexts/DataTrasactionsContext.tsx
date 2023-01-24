import { createContext, ReactNode, useEffect, useState } from 'react'

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

/* 
Esse é o valor que vai ser enviado, como:
const { dataCheckIn } = useContext(DataTransactionContext)
*/
interface DataTransactionContextType {
  dataCheckIn: dataInput[]
  dataOutput: dataInput[]
}

/* dataCheckIn e dataOutput */
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
  async function loadDataCheckIn() {
    const response = await fetch('http://localhost:3333/checkin')
    const data = await response.json()
    setDataCheckIn(data)
  }

  /* dataOutput */
  async function loadDataOutput() {
    const response = await fetch('http://localhost:3333/output')
    const data = await response.json()
    setDataOutput(data)
  }

  useEffect(() => {
    loadDataCheckIn()
    loadDataOutput()
  }, [])

  return (
    <>
      <DataCheckContext.Provider value={{ dataCheckIn, dataOutput }}>
        {children}
      </DataCheckContext.Provider>
    </>
  )
}
