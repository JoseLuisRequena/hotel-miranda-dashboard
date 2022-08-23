import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
color: #799283;
cursor: pointer;
text-decoration: none;

&:hover {
    color:red
    border-left: 2px solid red;
}
`