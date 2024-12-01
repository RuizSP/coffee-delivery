export function CoffeeItem()
{
    return(
        <div>
            <img src="" alt="Copo de café" />
            <span>tradicional</span>
            <strong>Expresso tradicional</strong>
            <small>O tradicional café feito com água quente e grãos moídos</small>

            <div>
                R$ 9,90
                <input type="number" defaultValue={1}/>
                <button>
                    <img src="" alt="carrinho" />
                </button>
            </div>
        </div>
    )
}