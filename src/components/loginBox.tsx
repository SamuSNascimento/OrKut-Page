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
        <div className="password-input">
          <StyledInput
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <label className="checkbox-sign-in">
          <input type="checkbox" />
          <p>Lembrar minha senha</p>
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="buttons-login-box-sign-in">
        <StyledButton
          onClick={() => {
            navigation(PROFILE_PAGE);
            sessionStorage.setItem("requisition", "pokemon/25/");
          }}
        >
          Entrar na conta
        </StyledButton>
        <StyledButton
          onClick={() => navigation("/CriarSenha")}
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
