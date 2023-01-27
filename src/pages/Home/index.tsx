import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TabsTable } from '../../components/Tabs'
import { MainContainer, MainContent, TableContainer } from './styles'

export function Home() {
  return (
    <div>
      <Header />

      <MainContainer>
        <MainContent>
          <div>
            <Summary />
          </div>

          <TableContainer>
            <TabsTable />
          </TableContainer>
        </MainContent>
      </MainContainer>

      <Footer />
    </div>
  )
}
