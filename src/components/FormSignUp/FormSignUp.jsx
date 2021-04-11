import React from 'react';
import styled from 'styled-components/macro';
import Input from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Select from '../Select/Select';
import SelectOption from '../SelectOption/SelectOption'

const Form = styled.form`
  width: 400px;
  height: 606px;
  background-color: #ffffff;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 28px;
`;

const TitleWrapper = styled.div``;

const Title = styled.h1`
  font-weight: 700;
  line-height: 34px;
  font-size: 24px;
`;

const FormControlWrapper = styled.div`
  margin-top: 37px;
`;

const FormSignUp = () => {
  return (
    <Form>
      <TitleWrapper>
        <Title>Create a new account</Title>
      </TitleWrapper>
      <FormControlWrapper>
        <Input error="Есть ошибка!" />
        <Input
          icon={<FontAwesomeIcon icon={faEnvelope} />} type="text" />
        <Input icon={<FontAwesomeIcon icon={faLock} />} type="password" />
        <Select>
          <SelectOption value="1">Россия</SelectOption>
          <SelectOption value="2">Германия</SelectOption>
        </Select>
      </FormControlWrapper>
    </Form>
  );
};

export default FormSignUp;
