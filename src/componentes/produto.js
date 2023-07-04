import BotaoComponente from "./botao";

export default function ProdutoComponente(props) {

    function compraEfetuada(){
        alert("Produto comprado");
    };

    return (
        <>
            <h1>{props?.nome}</h1>
            <p>{props?.descricao}</p>
            <BotaoComponente onClick={compraEfetuada} tipo="botao" titulo="Comprar" />
        </>
    )

}