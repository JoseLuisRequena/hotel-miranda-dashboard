import { Contenedor } from "../styles/Contenedor";
import { StyledHeader } from "../styles/StyledIcons";
import { Icons } from "../styles/StyledIcons";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { getAllBookings, allBookingsArray, oneBooking, deleteBooking, getBooking, deleteOneBooking } from "../slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MenuNav from "../components/MenuNav";
import { ButtonDelete, ButtonMenuNav, ButtonState, ButtonView } from "../styles/StyledButton";

const Tr =styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height:92px;
  background-color: #fff;
  &:hover {
    border: 1px solid;
    box-shadow: 0 0 10px 5px #0000001A;
  }
`;
const Td = styled.td`
  width: 180px;
`;
const TdSmall = styled.td`
  width: 100px;
`;

const colors = {
    green: '#799283',
    hardGreen: '#135846',
    lightGreen: '#EBF1EF',
    red: '#E23428',
    lightRed: '#FFEDEC',
    light: '#B2B2B2',
    bgGray: '#F8F8F8',
    gray: '#6E6E6E',
    borderGray: '#D4D4D4',
};

function ButtonStatus(props) {
  const status = props.status;
  let color;
  let background;
  if (status === "Available" || status === "checkin") {
    color = colors.hardGreen;
    background = colors.lightGreen; 
  } else if (status === "Booked" || status === "checkout") {
    color = colors.red;
    background = colors.lightRed;
  } else {
    color = "#FF9C3A";
    background = "#fff8ba" ;
  }
  return <ButtonState style={{ backgroundColor: background, color: color }}>{status}</ButtonState>;
}

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
    const booking = useSelector(oneBooking);
    

    useEffect(() => {
        dispatch2(getAllBookings());
    }, [])
   
    
    const borrarBooking = (id) => {
        dispatch2(deleteBooking(id));
    }
    const seeBooking = (id) => {
        console.log(id)
        dispatch2(getBooking(id));
    }

    const [open, setOpen] = useState(true);
    const handleOpen = () => open ? setOpen(false) : setOpen(true);
    
    return (
        <>
        <Contenedor>
            <MenuNav open = {open}/>
            <div style={{display: "block", width: "100%"}}>
            <StyledHeader>
            <ButtonMenuNav onClick = { handleOpen } >X</ButtonMenuNav>
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
                {bookingsList.map( 
                    booking => (
                        <Tr key={booking.id}>
                            <Td>
                                {booking.first_name}{booking.last_name}
                                <br />
                                {booking.id}
                            </Td>
                            <TdSmall>{booking.reservation_date}</TdSmall>-
                            <TdSmall>{booking.checkIn}</TdSmall>-
                            <TdSmall>{booking.checkOut}</TdSmall>
                            <Td>
                                <ButtonView onClick={() => seeBooking(booking.id)} />
                            </Td>
                            <Td>
                                {booking.typeRoom}
                            </Td>
                            <TdSmall>
                                <ButtonStatus status={booking.status}></ButtonStatus>
                            </TdSmall>
                            <TdSmall>
                                <ButtonDelete onClick={() => borrarBooking(booking.id)}/>
                            </TdSmall>
                        </Tr>
                    )                
                )}
            </ul>
            
            <ul>
                    {booking.map( booking => 
                    <li key = {booking.id} >{Object.values(booking)}</li>)}
            </ul>
            </div>
        </Contenedor>
        </>
    );
}