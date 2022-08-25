import { Contenedor } from "../styles/Contenedor";
import { Nav } from "../styles/Nav";
import { StyledImg } from "../styles/StyledImg";
import { StyledLink } from "../styles/StyledLink";
import { StyledHeader } from "../styles/StyledIcons";
import { Icons } from "../styles/StyledIcons";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { useContext } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";


export const Contacts = () => {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = () => {
        dispatch({ type: "logout" });
        navigate("/", { replace: true });
    };

    return(
        <>
            <Contenedor>
                <Nav>
                    <div>
                        <StyledImg />
                    </div>
                    <div>
                        <StyledLink to="/dashboard">Dashboard</StyledLink><br/>
                        <StyledLink to="/bookings">Bookings</StyledLink><br/>
                        <StyledLink to="/rooms">Rooms</StyledLink><br/>
                        <StyledLink to="/users">Users</StyledLink><br/>
                        <StyledLink to="/contacts">Contacts</StyledLink><br/>
                    </div>
                </Nav> 

                <StyledHeader>
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
            </Contenedor>
        </>
    )
}