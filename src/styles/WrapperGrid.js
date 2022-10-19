import styled from "styled-components";

export const WrapperGrid = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-evenly;
    background-color: #f8f8f8;
    @media only screen and (max-width: 1350px){
        display: block;
        margin: 20px auto;
      }
`

export const Grid2_3 = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
`
export const Grid1_2 = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
`