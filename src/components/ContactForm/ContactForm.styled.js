import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    display: flex;
    margin: 0;
    margin-bottom: 8px;
    font-size: 26px;
    align-items: center;
    justify-content: center;
  }
  
  input {
    display: block;
    font-size: 20px;
    width: 300px;
    height: 30px;
    margin-bottom: 8px;
    border: 1px solid black;
    border-radius: 4px;
    padding-left: 5px;
  }

`;