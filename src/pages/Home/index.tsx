import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { MainContainer, MainContent } from './styles'

export function Home() {
  return (
    <div>
      <Header />

      <MainContainer>
        <MainContent>
          <div>
            <Summary />
          </div>

          <div>
            <h1>teste</h1>
          </div>
        </MainContent>
      </MainContainer>
    </div>
  )
}
