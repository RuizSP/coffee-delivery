import { Link } from "react-router-dom";
import styled from "styled-components";

export const  Nav = styled.nav`
    display:flex;
    justify-content: space-around;
    align-items:center;
    width: 100%;
    gap:70%;
    height: 104px;
    background: var(--background);


`
export const Location= styled.span`
    display:flex;
    background: var(--purple-light);
    color:var(--purple);
    border-radius: 6px;
    height: 38px;
    padding:5px;
    justify-content:center;
    align-items:center;
    width: fit-content;
    gap:2px;

`

export const Cart = styled(Link)`
    background: var(--yellow-light);
    border-radius: 6px;
    width: 38px;
    height: 38px;
    display: flex; /* Para alinhar o conteúdo */
    align-items: center;
    justify-content: center;

    span {
        max-width:20px; 
        background: var(--yellow-dark); 
        color: var(--white);
        border-radius: 100%;
        display: inline-block; 
        padding: 3px 6px; 
        font-size: 0.75rem; 
        position: relative;
        top:-15px;
        left:5px;
        text-align:center; 
        text-decoration: none;
    }
`;