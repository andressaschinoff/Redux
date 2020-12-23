import styled from "styled-components"

const Container = styled.div`
  height: 80vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 5rem;
  font-family: Roboto;
  font-weight: 700;
  color: var(--title-color);
`;

const Description = styled.p`
  margin-top: 20px;
  font-family: Roboto;
  font-weight: 400;
  color: var(--description-color);
`;

export { Container, Title, Description };