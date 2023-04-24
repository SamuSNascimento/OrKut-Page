import styled from "styled-components";

export const StyledNavBar = styled.span`
  display: flex;
  background-color: #fdfeff;
  justify-content: space-evenly;
  width: auto;
  height: 92px;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: space-around;
    height: 60px;
    width: 100%;
  }
`;
export const StyledUserButton = styled.button`
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

export const StyledArrow = styled.div`
  width: 8px;
  height: 8px;
  border-bottom: solid 2px;
  border-right: solid 2px;
  transform: rotate(45deg);
  margin-bottom: 5px;
  border-color: #ed2590;
`;

export const StyledNavInput = styled.input`
  background: #eff3f8;
  border-radius: 8px;
  width: 25%;
  height: 50%;
  border: none;
  padding-left: 10px;
  font-size: 16px;
  outline-color: #ed2590;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledInput = styled.input`
  background: #fdfeff;
  border-radius: 8px;
  width: 310px;
  height: 44px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
  outline-color: #ed2590;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const StyledButton = styled.button`
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

  @media (max-width: 600px) {
    width: 100%;
    height: 50px;
    border: none;
    background: #eff3f8;
    border-radius: 8px;
    color: #ed2590;
    font-size: 16px;
    margin-top: 20px;
  }
`;
