import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const RegisterFormContainer = styled.div`
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 32px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  padding: 16px;
  margin-bottom: 32px;
  border: 2px solid yellow;
  border-radius: 4px;
`;

export const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ErrMessage = styled(ErrorMessage)`
  color: red;
`;

export const SubmitBtn = styled.button`
  padding: 4px 10px;
  box-shadow: yellowgreen 0px 1px 6px;
  background-color: #fff;
  border-color: transparent;
  width: fit-content;
  border-radius: 2px;

  &:hover,
  &:focus {
    box-shadow: yellow 0px 0px 0px 2px;
  }
`;

export const StyledField = styled(Field)`
  border-color: #eef0f2;
  border-style: solid;
  border-radius: 2px;

  &:hover,
  &:focus {
    box-shadow: yellow 0px 0px 0px 2px;
  }
`;
