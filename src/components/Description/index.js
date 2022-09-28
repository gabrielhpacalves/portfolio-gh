import './styles.css';
import { Link } from "react-router-dom";

function Description() {
  return (
    <article className="text">
      <h2>Sobre mim</h2>
      <p>
        Me chamo Gabriel Henrique (ou GH), tenho 25 anos e sou de São Paulo, Brasil. 
        Formado em Análise e Desenvolvimento de Sistemas (UNICSUL) e Técnico em Informática (SENAC). 
        Apaixonado (e curioso rs) por desenvolvimento de softwares, estudo programação desde 2014, atualmente com ênfase em desenvolvimento web e mobile.
        <br/>Corintiano roxo, desenho, futebol, basquete e atividades físicas são meus hobbies favoritos.
      </p>
      <Link to={`/formacao`}><a className='link'>Minha formação</a></Link>
      
    </article>
  )
}

export default Description;