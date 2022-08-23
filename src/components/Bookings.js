import { Contenedor } from "../styles/Contenedor";
import { Nav } from "../styles/Nav";
import { StyledImg } from "../styles/StyledImg";
import { StyledLink } from "../styles/StyledLink";
import { StyledHeader } from "../styles/StyledIcons";
import { Icons } from "../styles/StyledIcons";


export const Bookings = (props) => {
    return (
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
                <h1>Bookings</h1><h1></h1><h1></h1><h1></h1>
            <button style={{ width: "40px", 
                            height: "30px", 
                            margin: "auto 0px", 
                            border: "none", 
                            background: "none",
                            cursor: "pointer"
                            }} type="button">{Icons.enveloper}</button>
            <button style={{ width: "40px", 
                            height: "30px", 
                            margin: "auto 0px", 
                            border: "none", 
                            background: "none",
                            cursor: "pointer"
                            }} type="button">{Icons.bell}</button>
            <button style={{ width: "40px", 
                            height: "30px", 
                            margin: "auto 0px", 
                            border: "none", 
                            background: "none",
                            cursor: "pointer"
                            }} type="button" onClick={() => props.setAuth(false)}>{Icons.logout}</button>
            </StyledHeader>
        </Contenedor>
        </>
    );
}