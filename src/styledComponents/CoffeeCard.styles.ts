import styled from "styled-components";

export const Card= styled.div`
    display:flex;
    background: var(--base-card);
    border-radius: 6px 30px 6px 6px;
    width: 256px;
    height: 310px;
    flex-direction: column;
    align-items:center;
    justify-content:space-evenly;
    margin:20px;
    text-align: center;
    img{
        margin-top: -40px;
    
    }

`
export const CardRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;     
    margin: 20px 0; 
    gap: 5px;
    background: var(--base-card);
`;



export const Tag = styled.span`
    margin: 15px;
    background: var(--yellow-light);
    color:var(--yellow-dark);
    border-radius: 100%;
    width: fit-content;
    padding:2px;
    
` 