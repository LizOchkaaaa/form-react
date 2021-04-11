import React from 'react'
import styled from 'styled-components/macro'

const StyledOption = styled.option`
  white-space: normal;
  font-size: 14px;
  line-height: 32px;
  margin: 0 20px
`

const SelectOption = ({ children, ...props }) => {
  return <StyledOption>{children}</StyledOption>
}

export default SelectOption