import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { Contenedor } from "../styles/Contenedor";
import { Icons, StyledHeader } from "../styles/StyledIcons";
import { Grid1_2, Grid2_3, WrapperGrid } from "../styles/WrapperGrid";
import { WrapperMenuRight } from "../styles/WrapperMenuRight";
import { WrapperPage } from "../styles/WrapperPage";
import { Kpi, KpiRow } from "../styles/Kpi";
import BarChart from "../components/BarChart";
import Calendar from "../components/Calendar";
import icons from "../styles/StyledImgs";
import roomsData from "../json/Rooms.json"
import bookingsData from "../json/Bookings.json"
import { Contact } from "../components/Contact";
import MenuNav from "../components/MenuNav";
import { ButtonMenuNav, WrapperButtonMenuNav } from "../styles/StyledButtons";


export default function Dashboard() {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = () => {
        dispatch({ type: "logout" });
        navigate("/", { replace: true });
    };

    const getOccupationPercentage = () => {
        const vacants = roomsData.filter((room) => {
          let bool = true;
          bookingsData.forEach((booking) => {
            if (booking.status === 'checkin' && booking.id === room.room) bool = false;
          });
          return bool;
        });
        const percentage = `${100 - (Math.round((vacants.length * 100) / roomsData.length))} %`; 
        return percentage;
    };
    
    const getCheckIns = () => {
      const checkIns = bookingsData.filter((booking) => booking.status === 'checkin');
      return checkIns.length;
    };

    const getCheckOuts = () => {
      const checkOuts = bookingsData.filter((booking) => booking.status === 'checkout');
      return checkOuts.length;
    };
    
    //const data = {
    //    sales: [
    //      { day: '08/22/2022', value: 2500 },
    //      { day: '08/23/2022', value: 3000 },
    //      { day: '08/24/2022', value: 1100 },
    //      { day: '08/25/2022', value: 800 },
    //      { day: '08/26/2022', value: 2850 },
    //      { day: '08/27/2022', value: 4673 },
    //      { day: '08/28/2022', value: 3857 },
    //    ],
    //    occupation: [
    //      { day: '08/22/2022', value: 20 },
    //      { day: '08/23/2022', value: 32 },
    //      { day: '08/24/2022', value: 38 },
    //      { day: '08/25/2022', value: 30 },
    //      { day: '08/26/2022', value: 67 },
    //      { day: '08/27/2022', value: 89 },
    //      { day: '08/28/2022', value: 70 },
    //    ],
    //};
    
    const [open, setOpen] = useState(true);
    const handleOpen = () => open ? setOpen(false) : setOpen(true);
    
  return (
    <Contenedor>
        <MenuNav open = {open}/>
        <WrapperPage>
            <StyledHeader >
                <WrapperButtonMenuNav>
                    <ButtonMenuNav onClick = { handleOpen } >{Icons.arrows}</ButtonMenuNav>
                </WrapperButtonMenuNav>
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
            <KpiRow style = {{margin: "20px" }}>
                <Kpi data={{ icon: icons.bell, number: bookingsData.length, text: 'New Booking' }} />
                <Kpi data={{ icon: icons.bookings, number: getOccupationPercentage(), text: 'Occupation' }} />
                <Kpi data={{ icon: icons.checkIn, number: getCheckIns(), text: 'Check In' }} />
                <Kpi data={{ icon: icons.checkOut, number: getCheckOuts(), text: 'Check Out' }} />
            </KpiRow>
            <WrapperGrid>
                <Grid1_2>
                    <Calendar/>
                </Grid1_2>
                <Grid2_3>
                    <BarChart />
                </Grid2_3>
            </WrapperGrid>
            <Contact/>
        </WrapperPage>
    </Contenedor>
  );  
}