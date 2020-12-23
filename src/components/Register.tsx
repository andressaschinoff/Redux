import React from "react";
import Navbar from "./Navbar";
import { Form, Input, Button, ButtonContainer } from "../styles/Register";
import { useHistory } from "react-router-dom";
import { store } from "../store";
import { useLogin } from "../hooks/user.hook"
import { IUser } from '../actions/types/User.type.action';
import { addUser } from "../actions/User.action"

type Props = {
  saveButton?: string,
  login?: boolean;
}

const Register = ({ saveButton, login }: Props) => {
  const history = useHistory();
  const [user, setUser] = React.useState<IUser | any>({ email: "", password: "" });
  const isLogged = useLogin(user.email, user.password);

  const handleCancel = () => {
    history.push("/");
  };

  const handleSave = () => {
    if (login && isLogged) {
      history.push("/list");
    }

    const hasUser = store.getState().userState.users.find(({ email }) => email === user.email);
    if (hasUser !== undefined) {
      history.push("/login");
      return;
    }
    store.dispatch(addUser(user));
    history.push("/list");
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUser({ ...user, email: value });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUser({ ...user, password: value });
    // setCurrentPassword(value);
  };

  return (
    <>
      <Navbar isLogged={isLogged} />
      <Form onSubmit={(event: React.FormEvent) => event.preventDefault()} >
        <Input value={user.email} type="text" id="email" placeholder="email" onChange={handleEmail} />
        <Input value={user.password} type="password" id="password" placeholder="password" onChange={handlePassword} />
        <ButtonContainer>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>{saveButton}</Button>
        </ButtonContainer>
      </Form>
    </>
  );
}

export default Register;