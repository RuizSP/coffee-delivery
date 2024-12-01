
import { Link } from "react-router-dom"
import { Cart, Location, Nav } from "../styledComponents/Nav.styles"
import Logo from "../assets/Logo.svg";
import { ShoppingCart, MapPin } from 'phosphor-react';

export function Navbar()
{

    return(
        <>
           <Nav>
                <div>
                    <Link to={"/"}>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"5px"}}>
                    <Location>
                        <MapPin size={22} color={"var(--purple-dark)"} weight="fill"/>
                        VRB, MG
                    </Location>
                  <Cart to={"/checkout"}>
                        <ShoppingCart size={22} weight="fill" color="var(--yellow-dark)"/>
                  </Cart>
                </div>
           </Nav>
        </>
    )
}