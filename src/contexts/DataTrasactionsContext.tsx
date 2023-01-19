import { createContext, ReactNode, useEffect, useState } from 'react'

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

/* 
Esse é o valor que vai ser enviado, como:
const { dataCheckIn } = useContext(DataTransactionContext)
*/
interface DataTransactionContextType {
  dataCheckIn: dataCheckInInput[]
}

export const DataTransactionContext = createContext(
  {} as DataTransactionContextType,
)

interface dataTransactionProviderProps {
  children: ReactNode
}

export function DataTransactionProvider({
  children,
}: dataTransactionProviderProps) {
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
    <DataTransactionContext.Provider value={{ dataCheckIn }}>
      {children}
    </DataTransactionContext.Provider>
  )
}
