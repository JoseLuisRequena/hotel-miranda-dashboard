import styled from "styled-components";
import { ReactComponent as LogoutIcon } from "../imgs/iconExit.svg";
import { ReactComponent as BellIcon } from "../imgs/iconBell.svg";
import { ReactComponent as EnvelopeIcon } from "../imgs/iconEnvelope.svg"
import { ReactComponent as ArrowsIcon } from "../imgs/iconArrows.svg"

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

export const Icons = {
    logout: <Icon><LogoutIcon /></Icon>,
    bell: <Icon><BellIcon /></Icon>,
    enveloper: <Icon><EnvelopeIcon /></Icon>,
    arrows: <Icon><ArrowsIcon/></Icon>
  };