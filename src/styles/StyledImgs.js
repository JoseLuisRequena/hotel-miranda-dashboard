import styled from "styled-components";
import { ReactComponent as BellIcon } from "../imgs/iconBell.svg";

const Icon = styled.i`
  min-width: 48px;
  height: 48px;
  padding: 12px;
  position: relative;
  & svg {
    width: 24px;
    height: 24px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const icons = {
    //dashboard: <Icon><DashboardIcon /></Icon>,
    //bookings: <Icon><BookingsIcon /></Icon>,
    //rooms: <Icon><RoomsIcon /></Icon>,
    //contact: <Icon><ContactIcon /></Icon>,
    //users: <Icon><UsersIcon /></Icon>,
    //menu: <Icon><MenuIcon /></Icon>,
    //message: <Icon><MessageIcon /></Icon>,
    bell: <Icon><BellIcon /></Icon>,
    //logout: <Icon><LogoutIcon /></Icon>,
    //bed: <Icon><Bed /></Icon>,
    //checkIn: <Icon><CheckIn /></Icon>,
    //checkOut: <Icon><CheckOut /></Icon>,
    //cancel: <Icon><Cancel /></Icon>,
    //checkCircle: <Icon><CheckCircle /></Icon>,
    //leftArrow: <Icon><LeftArrow /></Icon>,
    //rightArrow: <Icon><RightArrow /></Icon>,
  };
  
  export default icons;