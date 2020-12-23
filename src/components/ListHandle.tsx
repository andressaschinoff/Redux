import React from "react";
import { store } from "../store";
import { Container, List } from "../styles/List";
import { Button, ButtonContainer } from "../styles/Register";

interface IProps {
  onDelete?: any
}

const ListHandle = ({ onDelete }: IProps) => {
  return (
    <Container>
      <List>
        {store.getState().listState.list.map(({ item, timestamp }) => {
          return (
            <li>
              <ButtonContainer>
                <span>
                  {item}
                </span>
                <Button onClick={() => onDelete(timestamp)}>Delete</Button>
              </ButtonContainer>
            </li>
          );
        })}
      </List>
    </Container>
  );
}

export default ListHandle;