import styled from "styled-components";
import { Form } from "./Register";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormList = styled(Form)`
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const List = styled.ul`
 list-style: none;
  display: flex;
  flex-flow: column;
  align-items:center;
  
  li {
    color: var(--description-color);
  }
`;

export { Container, FormList, List };