import ImageDev from "../src/imagens/Foto.jpg"
import IconeGitHub from "../src/imagens/icons8-github-50.png"
import IconeLinkedin from "../src/imagens/icons8-linkedin-50.png"
import "../src/index.css"

function App() {

  return (
    <main>
      <section>
        <p>
          Olá! Seja bem-vindo(a) ao eu portifólio 
        </p>
        
        <p>
          Meu nome é <span>Leonardo Freire</span> e eu sou desenvolvedor web
        </p>
        
        <div id="redes-sociais">
          <a href="#">
            <img src={IconeGitHub} alt="" srcSet=""/>
          </a>
          <a href="#">
            <img src={IconeLinkedin} alt="" srcSet=""/>
          </a>
          </div>

          <a href="#sobreMim">
            <button>Conheça mais sobre mim</button>
          </a>
        
      </section>
          
      <section>
      <img src={ImageDev} alt="" id="ImageDev"/>
      </section>
    </main>
  )
}

export default App
