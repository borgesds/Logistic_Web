import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 2px 10px ${(props) => props.theme['gray-900']};
`

export const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['gray-900']};
`