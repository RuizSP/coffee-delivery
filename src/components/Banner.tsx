import CoffeeImg from "../assets/coffee.png";
import { Grid } from "../styledComponents/Grid.styles";
import Feature from "./Feature";

export function Banner()
{
    return(
        <Grid columns="2fr 1fr" width="100%" padding="50px">
           <div>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
                </div>
                <Grid rows="repeat(2,1fr)" columns="repeat(2,1fr)" margin="50px 0 0 0 ">
                        
                        <Feature 
                            icon={"cart"}
                            text="Compra simples e segura" 

                            backgroundColor="var(--yellow-dark)"
                        />
                        <Feature 
                            icon={"package"}
                            text="Embalagem mantém o café intacto" 
                            backgroundColor="var(--base-text)"/>
                        <Feature 
                            icon={"timer"}
                            text="Entrega rápida e rastreada" 
                            backgroundColor="var(--yellow)"/>
                        
                        <Feature 
                            icon={"coffee"}
                            text="O café chega fresquinho até você" 
                            backgroundColor="var(--purple)"/>
                </Grid>
           </div>
            <div>
                <img src={CoffeeImg}/>
            </div>
        </Grid>
    )
}