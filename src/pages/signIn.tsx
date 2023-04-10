import React from "react";
import orkutLogo from "../assets/img/logo-orkut.png";
import image from "../assets/img/image.png";
import circle from "../assets/img/Vector.png";
import styled from "styled-components";

const SignIn: React.FC = () => {
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
    width: 80%;
    height: 12%;
    border: none;
    margin-top: 5%;
    padding-left: 10px;
    font-size: 16px;
    outline-color: #ed2590;
  `;

  const StyleTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #ed2590;
    margin-top: 13px;
  `;

  const StyledButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 30%;
    border: none;
    background: #ed2590;
    border-radius: 8px;
    color: #ffffff;
    font-size: 16px;
    margin-top: 20px;
    transition: all 0.5s;

    &.secondary {
      background: #eff3f8;
      color: #ed2590;
    }

    &:hover {
      -webkit-filter: drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.5));
      filter: drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.5));
    }
  `;

  return (
    <div className="container">
      <StyledNavBar>
        <img className="logo-orkut" src={orkutLogo} alt="Logo" />
        <div className="info-header">
          <p className="text">Sobre o Orkut</p>
          <p className="text">Centro de segurança</p>
        </div>
      </StyledNavBar>
      <div className="content">
        <img className="main-image" src={image} alt="Imagem" />
        <div className="login-box">
          <div className="header-login-box">
            <img className="circle-image" src={circle} alt="circle" />
            <StyleTitle>Acesse o OrKut</StyleTitle>
          </div>
          <StyledInput placeholder="E-mail"></StyledInput>
          <StyledInput type="password" placeholder="Senha"></StyledInput>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Lembrar minha senha
          </label>
          <div className="buttons-login-box">
            <StyledButton>Entrar na conta</StyledButton>
            <StyledButton className="secondary">Criar uma conta</StyledButton>
          </div>
          <p className="baseboard-text text">Esqueci minha senha</p>
        </div>
      </div>
      <StyledNavBar className="secondary">
        <p className="baseboard-text text">Todos os direitos reservados</p>
      </StyledNavBar>
    </div>
  );
};

export default SignIn;
