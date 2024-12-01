import { useEffect, useState } from "react";
import styled from "styled-components"
import { ICoffee } from "../Interfaces/ICoffee";

export const AmmountInput = styled.div`
    display:flex;
    background: var(--base-button);
    border:none;
    max-width:72px;
    max-height:38px;
    button{
        background: var(--base-button);
        border:none;
        color: var(--purple);
        width: 24px;
        height:24px;
        cursor:pointer;
    }
    input{
        background: var(--base-button);
        border: none;
        text-align: center;
        width: 36px; /* Ajustando o tamanho do input */
        height: 24px;
        font-size: 14px;
       
    }
    input:focus
    {
        outline:none;
        
    }

`
interface AmmountSelectorProps {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export function AmmountSelector({ quantity, setQuantity }: AmmountSelectorProps) {
    function handlePlusCoffee() {
        setQuantity((prev) => prev + 1);
    }

    function handleMinusCoffee() {
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    }

    return (
        <AmmountInput>
            <button onClick={handleMinusCoffee}>-</button>
            <input type="number" min={1} value={quantity} readOnly />   
            <button onClick={handlePlusCoffee}>+</button>
        </AmmountInput>
    );
}
