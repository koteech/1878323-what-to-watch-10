import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Films} from '../../types/films';
import Logo from '../../components/logo/logo';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import NoPage from '../../pages/no-page/no-page';

type AddReviewPageParams = {
  films: Films
}

function AddReviewPage({films}: AddReviewPageParams): JSX.Element {
  const params = useParams();
  const film = films.find((element) => element.id === params.id);
  if (film) {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backGroundUrl} alt={film.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo light={false}/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.Films}/${film.id}`} className="breadcrumbs__link">{film.title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.previewUrl} alt={`${film.title} poster`} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <AddReviewForm/>
        </div>

      </section>
    );
  }
  return <NoPage/>;

}

export default AddReviewPage;
