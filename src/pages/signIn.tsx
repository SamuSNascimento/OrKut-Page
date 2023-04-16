import React, { useState } from "react";
import orkutLogo from "../assets/img/logo-orkut.png";
import image from "../assets/img/image.png";
import circle from "../assets/img/Vector.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PROFILE_PAGE } from "../config/pages";

const StyledNavBar = styled.span`
  display: flex;
  background-color: #fdfeff;
  justify-content: space-around;
  width: auto;
  height: 92px;
  align-items: center;

  &.secondary {
    height: 48px;
  }
`;

const StyledInput = styled.input`
  background: #eff3f8;
  border-radius: 8px;
  width: 95%;
  height: 50px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
  outline-color: #ed2590;
`;

const StyleTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #ed2590;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  border: none;
  background: #ed2590;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;

  &.secondary {
    background: #eff3f8;
    color: #ed2590;
  }

  &:hover {
    -webkit-filter: drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.5));
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const SignIn: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigation = useNavigate();

  const user = "samuelsantosn4@gmail.com";
  const senha = "samuel123";

  return (
    <div className="container-sign-in">
      <StyledNavBar>
        <img className="logo-orkut-sign-in" src={orkutLogo} alt="Logo" />
        <div className="info-header-sign-in">
          <p className="text-sign-in">Sobre o Orkut</p>
          <p className="text-sign-in">Centro de segurança</p>
        </div>
      </StyledNavBar>
      <div className="content-sign-in">
        <img className="main-image-sign-in" src={image} alt="Imagem" />
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
              <span className="checkmark"></span>
              Lembrar minha senha
            </label>
          </div>
          <div className="buttons-login-box-sign-in">
            <StyledButton
              onClick={() => {
                if (email === user && password === senha) {
                  // setRequisition("pokemon/pikachu");
                  navigation(PROFILE_PAGE);
                  sessionStorage.setItem("requisition", "pokemon/pikachu");
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
            <p className="baseboard-text-sign-in text-sign-in text">
              Esqueci minha senha
            </p>
          </div>
        </div>
      </div>
      <StyledNavBar className="secondary">
        <p className="baseboard-text-sign-in text-sign-in">
          Todos os direitos reservados
        </p>
      </StyledNavBar>
    </div>
  );
};

export default SignIn;
