import React from "react";
import Navbar from "./Navbar";
import { Container, Title, Description } from "../styles/Home";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>
          My Todo
          <span>List</span>
        </Title>
        <Description>Please log in your account to have full access.</Description>
      </Container>
    </>
  )
}

export default Home;