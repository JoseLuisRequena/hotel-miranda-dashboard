import { Link, useNavigate } from "react-router-dom";
import { Contenedor } from "../styles/Contenedor";
import { Nav } from "../styles/Nav";
import { StyledHeader } from "../styles/StyledIcons";
import { StyledImg } from "../styles/StyledImg";
import { StyledLink } from "../styles/StyledLink";
import { Icons } from "../styles/StyledIcons";
import ArrayRooms from "../json/Bookings.json";                     // json son bookings
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { useContext } from "react";
import { AuthContext } from "../App";
//import { BookingsList } from "../json/BookingsList"


export const Rooms = (props) => {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = () => {
        dispatch({ type: "logout" });
        navigate("/", { replace: true });
    };
    
    let rooms = ArrayRooms;// json son bookings
    
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
            <div style={{display: "block", width: "100%"}}>
                <StyledHeader>
                    <h2>Rooms</h2>
                    
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
                
                <ul>
                    {rooms.map( room => 
                    <li key = {room.id} >{Object.values(room)}</li>)}
                </ul>
            </div>
        </Contenedor>
      </>
    );
}