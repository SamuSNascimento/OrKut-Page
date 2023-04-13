import React, { useEffect, useState } from "react";
import styled from "styled-components";
import orkutLogo from "../assets/img/logo-orkut.png";
import api from "../services/api";

const Profile: React.FC = () => {
  const [user, setUser] = useState(null);

  const StyledNavBar = styled.span`
    display: flex;
    background-color: #fdfeff;
    justify-content: space-evenly;
    width: auto;
    height: 92px;
    align-items: center;
  `;

  const StyledInput = styled.input`
    background: #eff3f8;
    border-radius: 8px;
    width: 25%;
    height: 50%;
    border: none;
    padding-left: 10px;
    font-size: 16px;
    outline-color: #ed2590;
  `;

  const StyledButton = styled.button`
    cursor: pointer;
    width: 80%;
    height: 12%;
    border: none;
    background: #eff3f8;
    border-radius: 8px;
    color: #ed2590;
    font-size: 16px;
    margin-top: 20px;

    &:hover {
      -webkit-filter: drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.5));
      filter: drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.5));
    }

    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
  `;

  const getPokemon = async () => {
    try {
      const response = await api.get("pokemon?limit=100000&offset=0");
      setUser(response.data);
    } catch (error) {
      console.log("erro");
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="container-profile">
      <StyledNavBar>
        <img className="logo-orkut" src={orkutLogo} alt="Logo" />
        <div className="info-header-profile">
          <p className="text-profile">Início</p>
          <p className="text-profile tab-profile">Perfil</p>
          <p className="text-profile">Comunidades</p>
          <p className="text-profile">Jogos</p>
        </div>
        <StyledInput placeholder="Pesquisar no Orkut"></StyledInput>
        <div className="bar-information-profile"></div>
      </StyledNavBar>
      <div className="content-profile">
        <div className="profile">
          <div className="basic-information-profile"></div>
          <StyledButton>Editar meu perfil</StyledButton>
        </div>
        <div className="information-profile"></div>
        <div className="other-users-profile">
          <div className="users-profile"></div>
          <div className="users-profile"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
