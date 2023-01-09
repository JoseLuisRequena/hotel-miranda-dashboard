import { Link, useNavigate } from "react-router-dom";
import { Contenedor } from "../styles/Contenedor";
import { StyledHeader } from "../styles/StyledIcons";
import { Icons } from "../styles/StyledIcons";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import styled from "styled-components";
import { allRoomsArray, deleteRoom, getAllRooms, getRoom, oneRoom } from "../slices/roomsSlice";
import { useDispatch, useSelector } from "react-redux";
import MenuNav from "../components/MenuNav";
import { ButtonDelete, ButtonMenuNav, ButtonState, WrapperButtonMenuNav } from "../styles/StyledButtons";

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
  let offer = '';
  if (status === "Available" || status ) {
    color = colors.hardGreen;
    background = colors.lightGreen;
    offer = 'offer'
  } else if (status === "Booked" || !status ) {
    color = colors.red;
    background = colors.lightRed;
    offer = 'not offer'
  } else {   
    color = "#FF9C3A";
    background = "#fff8ba" ;
  }
  return <ButtonState style={{ backgroundColor: background, color: color }}>{offer}</ButtonState>;
}


export const Rooms = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = () => {
        dispatch({ type: "logout" });
        navigate("/", { replace: true });
    };

    const dispatch2 = useDispatch();
    const roomsList = useSelector(allRoomsArray);
    //const room = useSelector(oneRoom);

    useEffect(() => {
        dispatch2(getAllRooms());
    }, []);

    const borrarRoom = (id) => {
        dispatch2(deleteRoom(id));
    }
    //const seeRoom = (id) => {
    //    console.log(id)
    //    dispatch2(getRoom(id));
    //}

    //let rooms = ArrayRooms;// json son bookings
    
    const [open, setOpen] = useState(true);
    const handleOpen = () => open ? setOpen(false) : setOpen(true);
    
    return (
      <>
        <Contenedor>
            <MenuNav open = {open}/>
            <div style={{display: "block", width: "100%"}}>
                <StyledHeader>
                    <WrapperButtonMenuNav>
                        <ButtonMenuNav onClick = { handleOpen } >{Icons.arrows}</ButtonMenuNav>
                    </WrapperButtonMenuNav>
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
                    {roomsList.map( 
                        room => (
                            <Tr key={room.room}>
                                <Td>
                                    {room.room}
                                    <br />
                                    {room.type}
                                </Td>
                                <TdSmall>Room Floor</TdSmall>
                                <Td>
                                    {room.amenites}
                                </Td>
                                <Td>
                                    {room.price/100}
                                </Td>
                                <TdSmall>

                                    <ButtonStatus status={room.offer}></ButtonStatus>
                                </TdSmall>
                                <TdSmall>
                                    <ButtonDelete onClick={() => borrarRoom(room.room)}/>
                                </TdSmall>
                            </Tr>
                        )                
                    )}
                </ul>
                {/*<ul>
                    {rooms.map( room => 
                    <li key = {room.id} >{Object.values(room)}</li>)}
                    </ul>*/}
            </div>
        </Contenedor>
      </>
    );
}