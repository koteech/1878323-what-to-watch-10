import {Link} from 'react-router-dom';
import './no-page.css';
import {AppRoute} from '../../const';

function NoPage(): JSX.Element {
  return (
    <div className="user-page">
      <div className="error-page__content">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to={AppRoute.Root} className="to-back">
          Go to home page
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
