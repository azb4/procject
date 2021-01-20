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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Как вас зовут" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Пароль" />
        <Input type="password" placeholder="Повторите пароль" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Создать</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Уже есть аккаунт?
        <BoldLink href="#" onClick={switchToSignin}>
          вход
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
