import styled from "styled-components";

export const UserWrapper = styled.div`
  width: 200px;
  height: 221px;
  line-height: 30px;
  margin: 50px auto;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  text-align: center;
`;
export const ImgUser = styled.div`
  background-image: url("https://xsgames.co/randomusers/assets/avatars/male/9.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% 100%;
  background-position: center;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  background-color: #c5c5c5;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const UserName = styled.span`
  font-size: 16px;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
`;
export const UserEmail = styled.span`
  font-size: 12px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
`;