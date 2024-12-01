import { Trash } from "phosphor-react";
import { AmmountSelector } from "./AmmountSelector";
import { ICoffee } from "../Interfaces/ICoffee";
import { CardRow } from "../styledComponents/CoffeeCard.styles";


interface CoffeeCartProps
{
    coffee: ICoffee;
}

export function CoffeeCartItem({coffee}:CoffeeCartProps)
{
    
    return(
     <CardRow>
        <img src={coffee.img} alt="coffee" />
        <strong>{coffee.name}</strong>
        <strong>{coffee.quantity} X {coffee.price} = R$ {coffee.quantity * coffee.price}</strong>
        <button> 
            <Trash/>
            Remover
        </button>
        <span>{coffee.price}</span>
     </CardRow>   
    )

}