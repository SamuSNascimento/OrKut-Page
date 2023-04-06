import React from "react";
import orkutLogo from "../assets/img/logo-orkut.png";
import image from "../assets/img/image.png";

const SignIn: React.FC = () => {
  return (
    <div className="container">
      <div className="nav-bar">
        <img className="logo-orkut" src={orkutLogo} alt="Logo" />
        <div className="info-header">
          <p>Sobre o Orkut</p>
          <p>Centro de segurança</p>
        </div>
      </div>
      <div className="content">
        <img className="main-image" src={image} alt="Imagem" />
        <div className="login-box"></div>
      </div>
      <div className="baseboard">
        <p className="baseboard-content">Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default SignIn;
