import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext, useState } from "react";
import { AuthContext } from "../App";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const style = {

  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: 8,
  fontFamily: "Poppins",
};
const Title = styled.h2`
  color: #135846;
`;
const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #135846;
`;
const Input = styled.input`
  margin: 20px auto 10px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  width: 300px;
  height: 30px;
  text-indent: 10px;
  margin-left: 30px;
  margin-right: 10px;
`;
const InputSubmit = styled.input`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  height: 35px;
  background: #ebf1ee;
  color: #135846;
  border-radius: 8px;
  border: none;
  margin: 20px 40px 0 0;
  border: 1px solid #799283;
  &:hover {
    background: #799283;
    color: white;
  }
`;
const Button= styled.button`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  height: 35px;
  background: #ebf1ee;
  color: #135846;
  border-radius: 8px;
  border: none;
  margin: 20px 0 0 40px;
  border: 1px solid #799283;
  &:hover {
    background: #799283;
    color: white;
  }
`;

export default function ModalEditUser(props) {
  const { open, handleClose } = props;
  const { state, dispatch } = useContext(AuthContext);
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "changeName", name: name });
    dispatch({ type: "changeEmail", email: email });
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title>Edit User</Title>
          <form onSubmit={handleSubmit}>
            <Label>Name:
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              /><br/>
              Email:
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Label><br/>
            <InputSubmit type="submit" value="Change"/>
            <Button onClick={handleClose} style={{}} >close</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
