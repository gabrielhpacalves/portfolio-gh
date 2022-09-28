import BlocoCurso from '../../components/BlocoCurso';
import './styles.css';

const listaCursos = [
    {
        id: 'ads',
        desc: 'Análise e Des. de Sistemas',
        escola: 'UNICSUL',
        ano: 2018
    },
    {
        id: 'react',
        desc: 'ReactJS na Prática',
        escola: 'UDEMY',
        ano: 2022
    },
    {
        id: 'cf-asp',
        desc: 'Controle Financeiro com ASP.NET MVC 5',
        escola: 'Alura',
        ano: 2019
    },
    {
        id: 'asp',
        desc: 'ASP.NET MVC 5',
        escola: 'Alura',
        ano: 2019
    },
    {
        id: 'os',
        desc: 'Operador de Sistemas',
        escola: 'SOS Computadores',
        ano: 2012
    },
    {
        id: 'ti',
        desc: 'Design Gráfico',
        escola: 'SENAC',
        ano: 2013
    },
]

const Page = () => {
    return (
        <main className="main-container">

            <div className='cursos'>

                <h2>Cursos</h2>

                {listaCursos.map(cursos => {
                    return (
                        <BlocoCurso id={cursos.id} curso={cursos.desc} escola={cursos.escola} ano={cursos.ano} />
                    )
                })}
            </div>


        </main>
    );
}

export default Page;