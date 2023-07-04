export default function BotaoComponente(props) {

    if (props.tipo === "link") {
        return (
            <>
                <a href={props.href}>{props.titulo}</a>
            </>
        )
    } else if (props.tipo === "botao") {
            return(
            <>
                <button onClick={props.onClick}>{props.titulo}</button>
            </>
            )

        } else {

            return (
                <>
                    <p>Tipo do botão não foi definido</p>
                </>
            )
        }


}