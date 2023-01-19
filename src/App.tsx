import { ThemeProvider } from 'styled-components'
import { DataTransactionProvider } from './contexts/DataTrasactionsContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* context provider */}
      <DataTransactionProvider>
        <Home />
      </DataTransactionProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
