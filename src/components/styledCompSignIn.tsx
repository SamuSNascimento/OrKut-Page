import styled from "styled-components";

export const StyledNavBar = styled.span`
  display: flex;
  background-color: #fdfeff;
  justify-content: space-around;
  width: 100%;
  height: 92px;
  align-items: center;

  &.secondary {
    height: 48px;
  }

  @media (max-width: 600px) {
    justify-content: center;
    height: 80px;
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  background: #eff3f8;
  border-radius: 8px;
  width: 95%;
  height: 50px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
  outline-color: #ed2590;
`;

export const StyleTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #ed2590;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
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
