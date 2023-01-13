import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { ButtonContact } from "../styles/StyledButtons";
import { ImgUser, UserName, UserWrapper } from "../styles/StyledUser";
import ModalEditUser from "./ModalEditUser";

export default function User(){
    const { state } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    //const [openForm, setOpenForm] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //const handleOpenForm = () => setOpenForm(true);
    //const handleCloseForm = () => setOpenForm(false);

    return(
        <div>
            <UserWrapper>
                <ImgUser />
                <UserName>{state.name}</UserName><br />
                <UserEmail>{state.email}</UserEmail><br />
                <ButtonContact onClick={handleOpen}>Edit</ButtonContact>
                <ModalEditUser open={open} handleClose={handleClose} />
            </UserWrapper>
                {/*<ButtonContact onClick={handleOpenForm}>Edit</ButtonContact>
                <ModalFrom  open={openForm} handleClose={handleCloseForm} />*/}
        </div>
    )
} 