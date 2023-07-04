import ProdutoComponente from "../componentes/produto";

const produtos = [
    {
        titulo: "Iphone",
        descricao: "iPhone é uma linha de smartphones desenvolvidos e comercializados pela Apple Inc. É o único smartphone a operar com o sistema operacional móvel iOS."
    },
    {
        titulo: "MacBook",
        descricao:"MacBook Air é um notebook ultraleve da Apple que recebeu sua última atualização em outubro de 2018"
    },
    {
        titulo: "Kindle",
        descricao: "O Kindle é um e-reader ou leitor digital, prático e de fácil manuseio com o melhor da tecnologia para sua leitura."
    },
    {
        titulo: "Alexa",
        descricao: "A Alexa é uma assistente virtual que passou a estar presente em muitos lares por conta dos dispositivos Echo."
    },
    {
        titulo: "Oculus",
        descricao: " um dispositivo independente com uma plataforma de realidade virtual no formato de um óculos tecnológico de cabeça para jogos eletrônicos desenvolvida pela Facebook "
    }
];




export default function ListaProdutosPagina() {


    return (
        <>
        <h1>Lista de Produtos</h1>
        {produtos.map( produto => (
            <ProdutoComponente nome={produto.titulo} descricao={produto.descricao}/>
        ))}



        </>
    )
}