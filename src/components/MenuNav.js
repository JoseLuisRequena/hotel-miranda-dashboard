import { Nav } from "../styles/Nav";
import { StyledImg } from "../styles/StyledImg";
import { StyledLink } from "../styles/StyledLink";
import User from "./User";

export default function MenuNav(props){

    if( props.open ){
        return(
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
                <User/>
            </Nav>
        );
    }
}