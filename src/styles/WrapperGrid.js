import styled from "styled-components";

export const WrapperGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    justify-content: space-around;
    width: 100%;
    background-color: #f8f8f8;
`

export const Grid2_3 = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
`
export const Grid1_2 = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
`