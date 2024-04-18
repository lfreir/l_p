import "../sobre/sobre.css"

export const sobre  = ({categoria}) => {
    return(
        <div id="{categoria}">
            <div id="resumo">
                <h2>Sobre Mim</h2>

                <p>
                    Meu nome é Leonardo e estudo Desenvolvimento Front End no Senai desde janeir de 2024
                    Estudei HTML, CSS e JavaScript e agora estou estudando o React.<br/><br/>

                    Também faço Faculdade de Tecnologia em Análise de Sistemas no Senac e espero em breve
                    estar preparado para o mercado de trabalho.
                </p>

            </div>

            <div id="meus-conhecimentos">
                <h2>Meus Conhecimentos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                </ul>


            </div>

        </div>
    )
}