import React, { useEffect, useState } from "react";
import styled from "styled-components";
import orkutLogo from "../assets/img/logo-orkut.png";
import api from "../services/api";

const StyledNavBar = styled.span`
  display: flex;
  background-color: #fdfeff;
  justify-content: space-evenly;
  width: auto;
  height: 92px;
  align-items: center;
`;

const StyledArrow = styled.div`
  width: 8px;
  height: 8px;
  border-bottom: solid 2px;
  border-right: solid 2px;
  transform: rotate(45deg);
  margin-bottom: 5px;
  border-color: #ed2590;
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

const Profile: React.FC = () => {
  const [requisition, setRequisition] = useState<string>(
    `${sessionStorage.getItem("requisition")}`
  );
  const [imgPoke, setImgPoke] = useState([]);
  const [pokes, setPokes] = useState([]);
  const [namePoke, setNamePoke] = useState([]);

  useEffect(() => {
    api.get("pokemon?limit=100000&offset=0").then(({ data }) => {
      setPokes(data.results);
    });

    api.get(`${requisition}`).then(({ data }) => {
      setImgPoke(data.sprites.other["official-artwork"]);
    });

    api.get(`${requisition}`).then(({ data }) => {
      setNamePoke(data.forms[0]);
    });
  }, [requisition]);

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
        <div className="header-profile">
          <img
            className="img-poke-header-profile"
            src={imgPoke.front_default}
            alt="pokemon"
          />
          <p>{namePoke.name}</p>
          <StyledArrow />
        </div>
      </StyledNavBar>
      <div className="content-profile">
        <div className="profile">
          <div className="basic-information-profile">
            <img
              className="img-poke-profile"
              src={imgPoke.front_default}
              alt="pokemon-profile"
            />
            <p>{namePoke.name}</p>
            <p></p>
          </div>
          <StyledButton>Editar meu perfil</StyledButton>
        </div>
        <div className="information-profile"></div>
        <div className="other-users-profile">
          <div className="users-container-profile">
            <div className="header-users-profile">
              <p>Amigos({pokes.length})</p>
              <p className="baseboard-text-sign-in text-sign-in text">
                Ver todos
              </p>
            </div>
            {pokes.map((element) => (
              <div className="user-profile">
                <img
                  className="img-poke-header-profile"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.url.slice(
                    33,
                    -1
                  )}.png`}
                  alt="img"
                />
                <p className="text-profile">{element.name}</p>
              </div>
            ))}
          </div>
          <div className="users-profile"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
