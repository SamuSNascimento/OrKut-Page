import React, { useEffect, useState } from "react";
import orkutLogo from "../assets/img/logo-orkut.png";
import api from "../services/api";
import {
  StyledArrow,
  StyledButton,
  StyledInput,
  StyledNavBar,
  StyledNavInput,
  StyledUserButton,
} from "../components/styledCompProfile";
import {
  InfoResume,
  InfoResumeResponsive,
} from "../components/informationResume";
import "../styles/profile.css";
import { PokemonsDto } from "../dto/pokemonsDto";
import { InfoPokesDto } from "../dto/infoPokesDto";

const Profile: React.FC = () => {
  const [requisition, setRequisition] = useState<string>(
    `${sessionStorage.getItem("requisition")}`
  );
  const [myImgPoke, setMyImgPoke] = useState<InfoPokesDto>({
    name: "",
    front_default: "",
  });
  const [myPoke, setMyPoke] = useState<InfoPokesDto>({
    name: "",
    front_default: "",
  });
  const [search, setSearch] = useState("");
  const [imgPoke, setImgPoke] = useState<InfoPokesDto>({
    name: "",
    front_default: "",
  });
  const [pokes, setPokes] = useState<PokemonsDto[]>([]);
  const [namePoke, setNamePoke] = useState<InfoPokesDto>({
    name: "",
    front_default: "",
  });
  const [typePoke, setTypePoke] = useState<InfoPokesDto>({
    name: "",
    front_default: "",
  });
  const [abilityPoke, setAbilityPoke] = useState<InfoPokesDto>({
    name: "",
    front_default: "",
  });
  const [movePoke, setMovePoke] = useState<InfoPokesDto>({
    name: "",
    front_default: "",
  });

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
        <img className="logo-orkut-sign-in" src={orkutLogo} alt="Logo" />
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
        <StyledNavInput
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
          <p className="name-profile">{myPoke.name}</p>
          <StyledArrow />
        </div>
      </StyledNavBar>
      <div className="content-profile">
        <div>
          <StyledInput
            placeholder="Pesquisar no Orkut"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
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
        <InfoResume
          namePoke={namePoke}
          typePoke={typePoke}
          abilityPoke={abilityPoke}
          movePoke={movePoke}
        />
        <div className="other-users-profile">
          <div className="users-container-profile">
            <div className="header-users-profile">
              <p>Amigos({pokes.length})</p>
              <p className="baseboard-text-sign-in text">Ver todos</p>
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
        <InfoResumeResponsive
          namePoke={namePoke}
          typePoke={typePoke}
          abilityPoke={abilityPoke}
          movePoke={movePoke}
        />
      </div>
    </div>
  );
};

export default Profile;
