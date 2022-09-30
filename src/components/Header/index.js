import SocialLink from './SocialLink';
import { linksList } from './linksList';
import './styles.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={`/`}><h1>Dev.GH</h1></Link> 

      <nav>
        {
          linksList.map(link => (
            <SocialLink
              key={link.url}
              url={link.url}
              icon={link.icon}
            />
          ))
        }
      </nav>
    </header>
  )
}

export default Header;