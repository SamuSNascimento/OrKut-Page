import React, { useEffect, useState } from "react";
import styled from "styled-components";
import orkutLogo from "../assets/img/logo-orkut.png";
import api from "../services/api";

const StyledUsersContainer = styled.div`
  display: flex;
  width: 86%;
  height: 60%;
  border: solid 5px #fdfeff;
  background-color: #fdfeff;
  border-radius: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 4px;
  flex-wrap: wrap;
`;

const StyledNavBar = styled.span`
  display: flex;
  background-color: #fdfeff;
  justify-content: space-evenly;
  width: auto;
  height: 92px;
  align-items: center;
`;
const StyledUserButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 90px;
  height: 94px;
  border: none;
  cursor: pointer;
  background-color: #fdfeff;

  &:active {
    transform: scale(0.98);
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.24);
  }
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
  const [myImgPoke, setMyImgPoke] = useState([]);
  const [myPoke, setMyPoke] = useState([]);
  const [search, setSearch] = useState<string>("");
  const [imgPoke, setImgPoke] = useState([]);
  const [pokes, setPokes] = useState([]);
  const [namePoke, setNamePoke] = useState([]);
  const [typePoke, setTypePoke] = useState([]);
  const [abilityPoke, setAbilityPoke] = useState([]);
  const [movePoke, setMovePoke] = useState([]);

  useEffect(() => {
    api.get("pokemon?offset=40&limit=123").then(({ data }) => {
      setPokes(data.results);
    });

    api.get(`${sessionStorage.getItem("requisition")}`).then(({ data }) => {
      setMyImgPoke(data.sprites.other.dream_world);
      setMyPoke(data.forms[0]);
    });

    api.get(`${requisition}`).then(({ data }) => {
      setImgPoke(data.sprites.other.dream_world);
      setNamePoke(data.forms[0]);
      setTypePoke(data.types[0].type);
      setMovePoke(data.moves[0].move);
      setAbilityPoke(data.abilities[0].ability);
    });
  }, [requisition]);

  const lowerSearch = search.toLowerCase();

  const filterPokes = pokes.filter((element) => {
    if (lowerSearch.length > 2) {
      return element.name.toLowerCase().includes(lowerSearch);
    }
    return pokes;
  });

  return (
    <div className="container-profile">
      <StyledNavBar>
        <img className="logo-orkut" src={orkutLogo} alt="Logo" />
        <div className="info-header-profile">
          <p className="text-profile text-color-profile">Início</p>
          <p
            className="text-profile tab-profile"
            onClick={() => {
              setRequisition("pokemon/25/");
            }}
          >
            Perfil
          </p>
          <p className="text-profile text-color-profile">Comunidades</p>
          <p className="text-profile text-color-profile">Jogos</p>
        </div>
        <StyledInput
          placeholder="Pesquisar no Orkut"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="header-profile">
          <img
            onClick={() => {
              setRequisition("pokemon/25/");
            }}
            className="img-poke-header-profile"
            src={myImgPoke.front_default}
            alt="pokemon"
          />
          <p>{myPoke.name}</p>
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
            <p className="text-name-profile text-color-profile">
              {namePoke.name}
            </p>
            <p>{typePoke.name}</p>
          </div>
          {requisition === sessionStorage.getItem("requisition") && (
            <StyledButton>Editar meu perfil</StyledButton>
          )}
        </div>
        <div className="information-profile">
          <div className="header-information-profile">
            <p className="text-name-profile text-color-profile">
              Boa tarde, {namePoke.name}
            </p>
            <div className="status-profile">
              <p>Eu sou do tipo: {typePoke.name}</p>
            </div>
          </div>
          <div className="content-information-profile">
            <span>
              Tipo: <p>{typePoke.name}</p>
            </span>
            <span>
              Espécie: <p>{namePoke.name}</p>
            </span>
            <span>
              Habilidade: <p>{abilityPoke.name}</p>
            </span>
            <span>
              Movimento:
              <p>{movePoke.name}</p>
            </span>
          </div>
        </div>
        <div className="other-users-profile">
          <div className="users-container-profile">
            <div className="header-users-profile">
              <p>Amigos({pokes.length})</p>
              <p className="baseboard-text-sign-in text-sign-in text">
                Ver todos
              </p>
            </div>
            <div className="users-profile">
              {filterPokes.map((element) => (
                <StyledUserButton
                  key={`${element.url.slice(26)}`}
                  onClick={() => {
                    setRequisition(`${element.url.slice(26)}`);
                  }}
                >
                  <img
                    key={`${element.url.slice(26)}`}
                    className="img-poke-header-profile"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${element.url.slice(
                      33,
                      -1
                    )}.svg`}
                    alt="img"
                  />
                  <p>{element.name}</p>
                </StyledUserButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
