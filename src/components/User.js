import { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../App";
import ModalEditUser from "./ModalEditUser";

const UserWrapper = styled.div`
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
const ImgUser = styled.div`
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
const UserName = styled.span`
  font-size: 16px;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
`;
const UserEmail = styled.span`
  font-size: 12px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
`;
const ButtonContact = styled.button`
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
export default function User(props){
    const { state } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <UserWrapper>
                <ImgUser />
                <UserName>{state.name}</UserName><br />
                <UserEmail>{state.email}</UserEmail><br />
                <ButtonContact onClick={handleOpen}>Edit</ButtonContact>
                <ModalEditUser open={open} handleClose={handleClose} />
            </UserWrapper>
        </div>
    )
}