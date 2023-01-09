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

export const ButtonView = styled.button`
  background-color: #eef9f2;
  width: 100px;
  height: 48px;
  border-radius: 12px;
  border: none;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  ::before {
    content: "View Notes";
  }
`;

export const ButtonState = styled.button`
width: 100px;
height: 48px;
border: none;
border-radius: 12px;
color: white;
font-family: "Poppins", sans-serif;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;
`;

export const ButtonDelete = styled.button`
  background-color: #eef9f2;
  width: 38px;
  height: 48px;
  border-radius: 12px;
  border: none;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  ::before {
    content: "X";
  }
`;

export const ButtonMenuNav = styled.button`
  width: 30px;
  height: 40px;
  background: #ebf1ee;
  color: #135846;
  border-radius: 0 20px 20px 0;
  border: none;
  padding: 0 10px 0 0;
  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
    width: 45px;
  }
`;
export const WrapperButtonMenuNav = styled.div`
display: flex;
width: 50px;
margin: auto 0;
`;