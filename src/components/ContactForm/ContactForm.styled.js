import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 16px;
  margin-bottom: 32px;
  border: 2px solid yellow;
`;

export const FormItem = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrMessage = styled(ErrorMessage)`
  color: red;
`;

export const SubmitBtn = styled.button`
  padding: 4px 10px;
  box-shadow: yellowgreen 0px 1px 4px;
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
  width: 200px;

  &:hover,
  &:focus {
    box-shadow: yellow 0px 0px 0px 2px;
  }
`;
