import './styles.css';
import photo from '../../assets/img/gh.jpg';

function Profile() {
  return (
    <figure>
      <img src={photo} alt="Imagem de GH" />
      <figcaption>Gabriel Henrique Pires Aguiar Cavalcante Alves</figcaption>
    </figure>
  )
}

export default Profile;