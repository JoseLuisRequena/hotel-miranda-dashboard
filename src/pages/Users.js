import { Contenedor } from "../styles/Contenedor";
import { StyledHeader } from "../styles/StyledIcons";
import { Icons } from "../styles/StyledIcons";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { allUsersArray, deleteUser, getAllUsers } from "../slices/usersSlice";
import MenuNav from "../components/MenuNav";
import { ButtonDelete, ButtonMenuNav, ButtonState } from "../styles/StyledButtons";

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
    offer = 'Active'
  } else if (status === "Booked" || !status ) {
    color = colors.red;
    background = colors.lightRed;
    offer = 'Inactive'
  } else {   
    color = "#FF9C3A";
    background = "#fff8ba" ;
  }
  return <ButtonState style={{ backgroundColor: background, color: color }}>{offer}</ButtonState>;
}

export const Users = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = () => {
        dispatch({ type: "logout" });
        navigate("/", { replace: true });
    };
    const dispatch2 = useDispatch();
    const usersList = useSelector(allUsersArray);
    //const room = useSelector(oneRoom);

    useEffect(() => {
        dispatch2(getAllUsers());
    }, []);

    const borrarUser = (id) => {
        dispatch2(deleteUser(id));
    }

    const [open, setOpen] = useState(true);
    const handleOpen = () => open ? setOpen(false) : setOpen(true);
    
    return (
        <>
            <Contenedor>
                <MenuNav open = {open}/>
                <div style={{display: "block", width: "100%"}}>
                    <StyledHeader>
                    <ButtonMenuNav onClick = { handleOpen } >{Icons.arrows}</ButtonMenuNav>
                        <h2>Users</h2>
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
                    {usersList.map( 
                        user => (
                            <Tr key={user.id}>
                                <Td //style={{ backgroundImage: src('https://xsgames.co/randomusers/assets/avatars/male/9.jpg')}} 
                                >
                                {/*<img src='https://xsgames.co/randomusers/assets/avatars/male/9.jpg'></img>*/}
                                </Td>
                                <Td>
                                    {user.name}
                                    <br />
                                    {user.id}
                                    <br />
                                    {user.startDate}

                                </Td>
                                <Td>{user.email}</Td>
                                <Td>
                                    {user.puesto}
                                </Td>
                                <Td>
                                    {user.phone}
                                </Td>
                                <TdSmall>

                                    <ButtonStatus status={user.state}/>
                                </TdSmall>
                                <TdSmall>
                                    <ButtonDelete onClick={() => borrarUser(user.id)}/>
                                </TdSmall>
                            </Tr>
                        )                
                    )}
                    </ul>
                </div>
            </Contenedor>
        </>
    );
}