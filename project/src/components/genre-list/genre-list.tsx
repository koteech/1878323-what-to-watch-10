import {Films} from '../../types/films';
import {Genre} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, setFilmsByGenre} from '../../store/action';

type GenreListProps = {
    films: Films
}

const getGenreList = (films: Films) => ['All genres', ...new Set(films.map((film) => film.genre))];

function GenreList({films}: GenreListProps) {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);
  return (
    <ul className="catalog__genres-list">
      {getGenreList(films).map((filmGenre) => (
        <li key={filmGenre} className={`catalog__genres-item${activeGenre === filmGenre ? ' catalog__genres-item--active' : ''}`}>
          <a onClick={
            (evt) => {
              evt.preventDefault();
              dispatch(changeGenre(filmGenre));
              dispatch(setFilmsByGenre());
            }
          }
          href="#"
          className="catalog__genres-link"
          >
            {Genre[filmGenre as keyof typeof Genre]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export {GenreList};
