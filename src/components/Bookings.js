import { Contenedor } from "../styles/Contenedor";
import { Nav } from "../styles/Nav";
import { StyledImg } from "../styles/StyledImg";
import { StyledLink } from "../styles/StyledLink";
import { StyledHeader } from "../styles/StyledIcons";
import { Icons } from "../styles/StyledIcons";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { getAllBookings, allBookingsArray, oneBooking, deleteBooking, getBooking } from "../Slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";


export const Bookings = () => {
    
    // refactorizar a un componente
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const Logout = () => {
         dispatch({ type: "logout" });
         navigate("/", { replace: true });
    };
    //-------------------
    const dispatch2 = useDispatch();
    const bookingsList = useSelector(allBookingsArray);

    useEffect(() => {
        dispatch2(getAllBookings());
    }, [])
   
    
    const seeBooking = (id) => {
        dispatch2(getBooking(id));
    }

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
                <h2>Bookings</h2>
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
                        style={{ width: "40px", 
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
                {bookingsList.map( booking => 
                <li key = {booking.id}>{booking.first_name}<button onClick={() => seeBooking(booking.id)}>O</button></li>)}
            </ul>
            </div>
        </Contenedor>
        </>
    );
}