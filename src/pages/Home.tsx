import { useContext, useEffect } from "react";
import { Banner } from "../components/Banner";
import { CoffeeGrid } from "../components/CoffeeGrid";
import { CoffeeContext } from "../App";
import { coffeeList } from "../model/CoffeeList";

export function Home()
{
    const {coffees, setCoffees} = useContext(CoffeeContext);
    
    useEffect(()=>{
        setCoffees(coffeeList);
    }, [])
    
    
    return(
        <>
            <Banner/>
            <CoffeeGrid/>
        </>
    )

}