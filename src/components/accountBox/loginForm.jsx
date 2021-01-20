import React, { useContext } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Email" />
        <Input type="password" placeholder="Пароль" />
      </FormContainer>
      <MutedLink href="#">Забыли пароль?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Вход</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Еще не зарегистрированы?
        <BoldLink href="#" onClick={switchToSignup}>
          Регистрация
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
