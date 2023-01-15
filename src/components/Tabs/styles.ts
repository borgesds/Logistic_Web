import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px ${(props) => props.theme['gray-900']};
`

export const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['orange-500']};
`

export const TabsTrigger = styled(Tabs.Trigger)`
  font-family: inherit;
  background-color: ${(props) => props.theme['gray-600']};
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  color: ${(props) => props.theme['orange-500']};
  user-select: none;
  cursor: pointer;

  :first-child {
    border-top-left-radius: 6px;
  }

  TabsTrigger:first-child {
    border-top-left-radius: 6px;
  }
  :last-child {
    border-top-right-radius: 6px;
  }

  :hover {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const TabsContent = styled(Tabs.Content)`
  flex-grow: 1;
  padding: 20px;
  background-color: ${(props) => props.theme['gray-600']};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  max-height: 480px;
  overflow: scroll;

  focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['orange-500']};
  }
`

export const DataTable = styled.table`
  width: 1400px;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  th {
    padding: 1rem;
    background: ${(props) => props.theme['gray-700']};
    font-size: small;

    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  td {
    padding: 1.25rem 1rem;
    font-size: small;
  }
`

interface ThirdPartyProductsProps {
  variant: 'yes' | 'no'
}

export const ThirdPartyProducts = styled.td<ThirdPartyProductsProps>`
  color: ${(props) =>
    props.variant === 'no'
      ? props.theme['green-500']
      : props.theme['yellow-500']};
`
