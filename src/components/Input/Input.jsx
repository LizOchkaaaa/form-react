import React from 'react'
import styled from 'styled-components/macro'

export const InputWrapper = styled.div`
  min-height: 71px;
`

export const FieldWrapper = styled.div`
  padding: 17px 18px;
  box-sizing: border-box;
  min-width: 343px;
  background-color: #f5f8fa;
  border-radius: 8px;
  display: flex;
  & > input {
    background-color: #f5f8fa;
    outline: none;
    border: none;
    width: 100%
  }
`

const IconWrapper = styled.div`
  width: 34px;
  & > svg {
    height: 100%;
  }
`

const Error = styled.p`
  margin: 0px 0px 0px 18px;
  font-size: 10px;
  linhe-height: 13px;
  color: #e82B28;
`

const Input = ({ icon, error, ...props }) => {
  return (
    <InputWrapper>
      <FieldWrapper>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <input type="text" {...props} />
      </FieldWrapper>
      {error && <Error>{error}</Error>}
    </InputWrapper>
  )
}

export default Input;
