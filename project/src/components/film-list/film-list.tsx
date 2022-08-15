import {Films} from '../../types/films';
import FilmCard from '../../components/film-card/film-card';

type FilmListProps = {
    films: Films
    genre?: string,
    count?: number
}

function FilmList({films, genre, count = 4}: FilmListProps): JSX.Element {
  if (genre) {
    films = films.filter((film) => film.genre === genre).slice(0, count);
  }

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film}/>)}
    </div>
  );
}

export default FilmList;
