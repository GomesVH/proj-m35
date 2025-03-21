import styled from 'styled-components'
import { Colors } from '../../styles'
import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${Colors.green};
  color: ${Colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: flex;
  justify-content: center;
`