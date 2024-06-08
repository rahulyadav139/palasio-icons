import { Link } from 'react-router-dom';
import { IconsContainer } from './components/IconsContainer';
export const HomePage = () => {
  return (
    <div>
      <div style={{ padding: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>Palasio Icons</h1>
          <Link
            style={{
              marginLeft: 'auto',
              textDecoration: 'none',
              color: '#000',
              fontSize: '14px',
            }}
            to="/documents"
            relative="path"
          >
            Documents
          </Link>

          {/* <Link href>Documents</Link> */}
        </div>

        <p>
          Browse through the icons below to find the one you need. The search
          field supports synonyms—for example, try searching for "hamburger" or
          "logout."
        </p>
      </div>
      <IconsContainer />
    </div>
  );
};
