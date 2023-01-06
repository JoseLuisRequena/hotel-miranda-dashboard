import styled from "styled-components";

export const StyledButton = styled.button`
  color: #135846;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #135846;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background:#1358466b;
  }
`;
export const ButtonContact = styled.button`
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  width: 158px;
  height: 47px;
  background: #ebf1ee;
  color: #135846;
  border-radius: 8px;
  border: none;
  margin-top: 5px;
  &:hover {
    filter: brightness(0.97);
  }
`;

export const ButtonMenuNav = styled.button`
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  width: 30px;
  height: 40px;
  background: #ebf1ee;
  color: #135846;
  border-radius: 0 20px 20px 0;
  border: none;
  margin: auto 0;
  &:hover {
    filter: brightness(0.8);
  }
`;