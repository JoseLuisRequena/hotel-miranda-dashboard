import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { Contenedor } from "../styles/Contenedor";
import { Nav } from "../styles/Nav";
import { Icons, StyledHeader } from "../styles/StyledIcons";
import { StyledImg } from "../styles/StyledImg";
import { StyledLink } from "../styles/StyledLink";
import { Grid1_2, Grid2_3, WrapperGrid } from "../styles/WrapperGrid";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { WrapperPage } from "../styles/WrapperPage";
import BarChart from "./BarChart";

export default function Dashboard() {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = () => {
        dispatch({ type: "logout" });
        navigate("/", { replace: true });
    };

  return (
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
        <WrapperPage>
            <StyledHeader >
                <h2>Dashboard</h2>
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
                    onClick={() => Logout() }
                >
                    {Icons.logout}
                </button>
                </WrapperMenuRight>
            </StyledHeader>
                <WrapperGrid>
                    <Grid1_2>
                        {/*<Calendar/>*/}
                    </Grid1_2>
                    <Grid2_3>
                        <BarChart />
                    </Grid2_3>
                </WrapperGrid>
        </WrapperPage>
    </Contenedor>
  );  
}