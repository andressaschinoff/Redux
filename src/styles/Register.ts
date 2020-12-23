import styled from "styled-components";

const Form = styled.form`
  padding-top: 50px;
  height: 500px;
  margin: 0 8vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: var(--primary-color);
  font-family: Roboto;
  font-weight: 500;
  text-align: right;
  
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  margin: 5px 0;   
  padding: 5px;
  font-size: 1.25rem;
  color: var(--primary-color);
  border-color: var(--primary-color); 
`;

const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-family: Roboto;
  font-size: 1.25rem;
  border: none;
  border-radius: 10px;
`;

export { Form, Input, Button, ButtonContainer };