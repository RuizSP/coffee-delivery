import { Link } from "react-router-dom";
import { CoffeeCartItem } from "../components/CoffeeCartItem";

export function Checkout()
{
    return(
        <>
           <div>
                <strong>Complete Seu pedido</strong>
                    <span>
                        <img src="" alt="logo" />
                        Endereço de Entrega
                        <small>Informe o endereço onde deseja receber seu pedido</small>
                    </span>
                <form >
                    <input type="text" placeholder="CEP" required/>
                    <input type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                    <input type="text" placeholder="Complemento" />
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Cidade" />
                    <input type="text" placeholder="UF" />

                </form>
               <div>
               <span>
                    Pagamento <br />
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </span>
                <button>Cartao de crédito</button>
                <button>Cartao de débito</button>
                <button>Dinheiro</button>
               </div>
           </div>

           <div>
                <strong>Cafés selecionados</strong>
                    <CoffeeCartItem/>
                <span>Total de itens R$</span>
                <span>Entrega R$</span>
                <strong>Total R$</strong>
                <Link to="/success">
                    <button>CONFIRMAR PEDIDO</button>
                </Link>
           </div>
        </>
    )

}