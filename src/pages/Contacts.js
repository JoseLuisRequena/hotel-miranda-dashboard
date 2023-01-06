import { Contenedor } from "../styles/Contenedor";
import { StyledHeader } from "../styles/StyledIcons";
import { Icons } from "../styles/StyledIcons";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Contact } from "../components/Contact";
import { WrapperPage } from "../styles/WrapperPage";
import MenuNav from "../components/MenuNav";
import { ButtonMenuNav } from "../styles/StyledButton";


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
                    <ButtonMenuNav onClick = { handleOpen } >X</ButtonMenuNav>
                        <h2>Contacts</h2>
                        <WrapperMenuRight>
                            <button 
                                style={{ 
                                    width: "40px", 
                                    height: "30px", 
                                    margin: "auto 0px", 
                                    border: "none", 
                                    background: "none",
                                    cursor: "pointer"
                                }} 
                                type="button"
                            >
                                {Icons.enveloper}
                            </button>
                            <button 
                                style={{
                                    width: "40px", 
                                    height: "30px", 
                                    margin: "auto 0px", 
                                    border: "none", 
                                    background: "none",
                                    cursor: "pointer"
                                }} 
                            type="button"
                            >
                                {Icons.bell}
                            </button>
                            <button 
                                style={{
                                    width: "40px", 
                                    height: "30px", 
                                    margin: "auto 0px", 
                                    border: "none", 
                                    background: "none",
                                    cursor: "pointer"
                                }}
                                type="button" 
                                onClick={() => Logout()}
                            >
                                {Icons.logout}
                            </button>
                        </WrapperMenuRight>
                    </StyledHeader>
                    <Contact/>
                </WrapperPage>
            </Contenedor>
        </>
    )
}