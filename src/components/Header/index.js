import SocialLink from './SocialLink';
import { linksList } from './linksList';
import './styles.css';

function Header() {
  return (
    <header>
      <h1>Dev.GH</h1>

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