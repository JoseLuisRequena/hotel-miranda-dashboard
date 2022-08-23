import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Contenedor } from "../styles/Contenedor";
import { Nav } from "../styles/Nav";
import { StyledHeader } from "../styles/StyledIcons";
import { StyledImg } from "../styles/StyledImg";
import { StyledLink } from "../styles/StyledLink";

export function Room() {
    const {room} = useParams();
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
                    <h2>{room}</h2>
                </StyledHeader>
            </Contenedor>
        
        </>
    );
}