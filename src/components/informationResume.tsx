import React from "react";

type Props = {
  namePoke: Array<string>;
  typePoke: Array<string>;
  abilityPoke: Array<string>;
  movePoke: Array<string>;
};

export const InfoResumeResponsive: React.FC<Props> = ({
  namePoke,
  typePoke,
  abilityPoke,
  movePoke,
}) => {
  return (
    <div className="information-responsive-profile">
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
  );
};

export const InfoResume: React.FC<Props> = ({
  namePoke,
  movePoke,
  typePoke,
  abilityPoke,
}) => {
  return (
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
  );
};
