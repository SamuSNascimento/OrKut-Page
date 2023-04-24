import React from "react";
import orkutLogo from "../assets/img/logo-orkut.png";
import image from "../assets/img/image.png";
import { StyledNavBar } from "../components/styledCompSignIn";
import LoginBox from "../components/loginBox";
import "../styles/signIn.css";

const SignIn: React.FC = () => {
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
        <LoginBox />
      </div>
      <StyledNavBar className="secondary">
        <p className="baseboard-text-sign-in">Todos os direitos reservados</p>
      </StyledNavBar>
    </div>
  );
};

export default SignIn;
