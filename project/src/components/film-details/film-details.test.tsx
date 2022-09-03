import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import {FilmDetails} from './film-details';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Film} from '../../types/films';
import {FilmData} from '../../types/state';
import {makeFakeFilm} from '../../utils/mocks';

const fakeFilm = makeFakeFilm();

const initialState = {
  FILM_DATA: {
    films: [],
    film: fakeFilm as Film,
    filmsSimilar: [],
    filmsFavorite: [],
    filmPromo: {} as Film,
    isLoadError: false,
  } as FilmData
};

const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('Component: FilmDetails', () => {
  it('should render currectly', () => {
    const history = createMemoryHistory();
    history.push('/films/1');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilmDetails/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();
    expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Released/i)).toBeInTheDocument();
  });
});
