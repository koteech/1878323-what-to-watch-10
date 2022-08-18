import {Link, useNavigate, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import {Reviews} from '../../types/reviews';
import NoPage from '../../pages/no-page/no-page';
import {AppRoute} from '../../const';
import {FilmTabs} from '../../components/film-tabs/film-tabs';
import FilmList from '../../components/film-list/film-list';
import {useAppSelector} from '../../hooks';

type FilmsProps = {
  filmReviews: Reviews
}

function FilmPage({filmReviews}: FilmsProps): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const film = films.find((element) => element.id.toString() === params.id);
  if (film) {
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name}/>
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header film-card__head">
              <Logo light={false}/>
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
            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>
                <div className="film-card__buttons">
                  <button onClick={() => navigate(`${AppRoute.Player}/${film.id}`)} className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button onClick={() => navigate(AppRoute.MyList)} className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </button>
                  <Link to='review' className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={film.name} width="218" height="327"/>
              </div>
              <FilmTabs film={film} filmReviews={filmReviews}/>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmList genre={film.genre}/>
          </section>
          <footer className="page-footer">
            <Logo light/>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
  return (<NoPage/>);
}

export default FilmPage;
