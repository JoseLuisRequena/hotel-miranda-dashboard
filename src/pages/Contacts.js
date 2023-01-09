import { Contenedor } from "../styles/Contenedor";
import { StyledHeader } from "../styles/StyledHeader";
import { Icons } from "../styles/StyledIcons";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Contact } from "../components/Contact";
import { WrapperPage } from "../styles/WrapperPage";
import MenuNav from "../components/MenuNav";
import { ButtonIcon, ButtonMenuNav, WrapperButtonMenuNav } from "../styles/StyledButtons";

export const Contacts = () => {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = () => {
        dispatch({ type: "logout" });
        navigate("/", { replace: true });
    };

    const [open, setOpen] = useState(true);
    const handleOpen = () => open ? setOpen(false) : setOpen(true);
    
    return(
        <>
            <Contenedor>
                <MenuNav open = {open}/>
                <WrapperPage>
                    <StyledHeader>
                        <WrapperButtonMenuNav>
                            <ButtonMenuNav onClick = { handleOpen } >{Icons.arrows}</ButtonMenuNav>
                        </WrapperButtonMenuNav>
                        <h2>Contacts</h2>
                        <WrapperMenuRight>
                            
                            <ButtonIcon > {Icons.enveloper} </ButtonIcon>
                            <ButtonIcon > {Icons.bell} </ButtonIcon>
                            <ButtonIcon onClick={() => Logout() }> {Icons.logout} </ButtonIcon>
                
                        </WrapperMenuRight>
                    </StyledHeader>
                    <Contact/>
                </WrapperPage>
            </Contenedor>
        </>
    )
}