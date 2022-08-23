import { Link } from "react-router-dom";
import { Contenedor } from "../styles/Contenedor";
import { Nav } from "../styles/Nav";
import { StyledHeader } from "../styles/StyledIcons";
import { StyledImg } from "../styles/StyledImg";
import { StyledLink } from "../styles/StyledLink";
import { Icons } from "../styles/StyledIcons";
import ArrayRooms from "../json/Bookings.json";
// rooms.json son bookings

export const Rooms = (props) => {
    console.log(ArrayRooms);
    
    let rooms = ArrayRooms.filter(room => room.id === 3);

    console.log(rooms)
    
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
            <div style={{display: "block",     width: "100%"}}>
            <StyledHeader>
            <h2>Rooms</h2><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1>
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
            <ul>
                {rooms.first_name}
                {/*rooms.map(room => (<li key={room.id}><Link to={`/rooms/${room}`}>{room}</Link></li>))*/}
            </ul>
            </div>
        </Contenedor>
      </>
    );
}