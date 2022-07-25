import {Link} from 'react-router-dom';

function NoPage(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}

export default NoPage;
