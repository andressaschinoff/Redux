import React from "react";
import { Input, ButtonContainer, Button } from "../styles/Register";
import { FormList } from "../styles/List";
import ListHandle from "./ListHandle";
import Navbar from "./Navbar";
import { store } from "../store";
import { addItem, deleteItem } from "../actions/List.action";
import { IItem } from "../actions/types/List.type.action";

const List = () => {
  const [item, setItem] = React.useState<IItem | any>();

  React.useEffect(() => {
    console.log(store.getState().listState.list);
  }, [store.getState().listState.list])

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    console.log()
    store.dispatch(addItem(item));
  };

  const handleDelete = (timestamp: number) => {
    console.log(timestamp);
    store.dispatch(deleteItem(timestamp));
  };

  const handleItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setItem({ item: value, timestamp: Date.now() });
  }

  return (
    <React.Fragment>
      <Navbar />
      <FormList onSubmit={handleSave}>
        <Input value={item?.item} onChange={handleItem} type="text" placeholder="Insert or delete a item from the list" />
        <ButtonContainer>
          <div />
          <Button onClick={handleSave}>Save</Button>
        </ButtonContainer>
      </FormList>
      <ListHandle onDelete={handleDelete} />
    </React.Fragment>
  );
}

export default List;