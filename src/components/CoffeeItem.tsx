import { Card, Tag } from "../styledComponents/CoffeeCard.styles";
import { ShoppingCart } from "phosphor-react";
import { BtnCart } from "../styledComponents/BtnCart.styles";
import { AmmountSelector } from "./AmmountSelector";

import { ICoffee } from "../Interfaces/ICoffee";
import { Grid } from "../styledComponents/Grid.styles";
import { createContext, useContext, useState } from "react";
import { CoffeeContext } from "../App";

interface CoffeeItemProps
{
    coffee:ICoffee;

}

const CoffeeItemContext = createContext({} as any);


export function CoffeeItem({coffee}:CoffeeItemProps)
{
    const {coffeesInCart, setCoffeesInCart} = useContext(CoffeeContext);
    const [quantity, setQuantity] = useState<number>(1);


    function handleAddCoffee() {
        const existingCoffee = coffeesInCart.find((c) => c.id === coffee.id);

        if (existingCoffee) {
            // Atualiza a quantidade no carrinho
            const updatedCart = coffeesInCart.map((c) =>
                c.id === coffee.id ? { ...c, quantity: c.quantity + quantity } : c
            );
            setCoffeesInCart(updatedCart);
        } else {
            // Adiciona um novo item ao carrinho
            const newCoffee = { ...coffee, quantity };
            setCoffeesInCart([...coffeesInCart, newCoffee]);
        }

        // Reseta a quantidade após adicionar ao carrinho
        setQuantity(1);
    }
    return(
        <Card>
            <img src={coffee.img} alt="Copo de café" />
            <Grid columns="repeat(4,2fr)" rows="auto">
            {
                coffee.tags.map((tag, idx) =>{
                    return(<Tag key={idx}>{tag}</Tag>);
                })
            }
            </Grid>
            <strong>{coffee.name}</strong>
            <small>{coffee.decription}</small>

            <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                R$ {coffee.price}
                <CoffeeItemContext.Provider value={{coffee}}>
                    <AmmountSelector quantity={quantity} setQuantity={setQuantity} />
                </CoffeeItemContext.Provider>
                
                <BtnCart onClick={handleAddCoffee}>
                    <ShoppingCart weight="fill" color="white" size={22}/>
                </BtnCart>
            </div>
        </Card>
    )
}