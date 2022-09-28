import './styles.css';

function BlocoCurso({ id, curso, ano, escola }) {
  return (
    <div key={id} className='bloco'>
        <h4 className='title'>{curso}</h4>
        <p>{escola} - Conclusão: {ano}</p>
    </div>
  )
}

export default BlocoCurso;