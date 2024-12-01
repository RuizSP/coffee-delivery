import { useContext } from "react";
import { CoffeeItem } from "./CoffeeItem";
import { CoffeeContext } from "../App";
import { Grid } from "../styledComponents/Grid.styles";


export function CoffeeGrid()
{
    const {coffees, setCoffees} = useContext(CoffeeContext);
    return(
        <div>
            <h2 style={{marginBottom:"60px"}}>Nossos Cafés</h2>
            <Grid columns="repeat(auto-fill, minmax(300px, 1fr))" rows="auto" gap="100px">
           {
                coffees.map(coffee =>
                {
                    return(
                        <CoffeeItem key={coffee.id} coffee={coffee}/>
                    )
                }
                )
           }
           </Grid>
        </div>
    )
}