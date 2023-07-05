import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyleTitle,
  StyledButton,
  StyledInput,
} from "../components/styledCompSignIn";
import circle from "../assets/img/Vector.png";
import { PROFILE_PAGE } from "../config/pages";

const LoginBox: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigation = useNavigate();

  const user = "samuelsantosn4@gmail.com";
  const senha = "samuel123";

  return (
    <div className="login-box-sign-in">
      <div className="header-login-box-sign-in">
        <img className="circle-image-sign-in" src={circle} alt="circle" />
        <StyleTitle>Acesse o OrKut</StyleTitle>
      </div>
      <div className="inputs-sign-in">
        <StyledInput
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label className="checkbox-sign-in">
          <input type="checkbox" />
          Lembrar minha senha
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="buttons-login-box-sign-in">
        <StyledButton
          onClick={() => {
            if (email === user && password === senha) {
              navigation(PROFILE_PAGE);
              sessionStorage.setItem("requisition", "pokemon/25/");
            } else {
              alert("ta errado");
            }
          }}
        >
          Entrar na conta
        </StyledButton>
        <StyledButton
          onClick={() => console.log("Criar")}
          className="secondary"
        >
          Criar uma conta
        </StyledButton>
        <p className="baseboard-text-sign-in text">Esqueci minha senha</p>
      </div>
    </div>
  );
};

export default LoginBox;
