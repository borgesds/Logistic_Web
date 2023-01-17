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
  background: ${(props) => props.theme['gray-600']};
  padding: 0 1.25rem;
  height: 2.813rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  color: ${(props) => props.theme['orange-500']};
  border: 1px solid ${(props) => props.theme['orange-700']};
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
    background: ${(props) => props.theme['gray-800']};
  }

  &[data-state='active'] {
    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['orange-700']};
  }
`

export const TabsContent = styled(Tabs.Content)`
  flex-grow: 1;
  padding: 1.25rem;
  background-color: ${(props) => props.theme['gray-600']};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  max-height: 480px;
  overflow: scroll;
`

export const DataTable = styled.table`
  width: 1400px;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  th {
    padding: 1rem;
    background: ${(props) => props.theme['gray-800']};
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
    border-bottom: 1px solid ${(props) => props.theme['gray-800']};
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

interface TypeProductsProps {
  variant: 'food' | 'industrial' | 'house' | 'public' | 'technology' | 'others'
}

export const TypeProducts = styled.td<TypeProductsProps>`
  color: ${(props) => {
    if (props.variant === 'food') {
      return props.theme['orange-500']
    } else if (props.variant === 'industrial') {
      return props.theme.darkTurquoise
    } else if (props.variant === 'house') {
      return props.theme.darkMagenta
    } else if (props.variant === 'public') {
      return props.theme['yellow-500']
    } else if (props.variant === 'technology') {
      return props.theme.blue
    } else {
      return props.theme.white
    }
  }};
`
