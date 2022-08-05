import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Films} from '../../types/films';
import {Reviews} from '../../types/reviews';
import PrivateRoute from '../../components/private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NoPage from '../../pages/no-page/no-page';

type AppPageProps = {
    films: Films
    filmReviews: Reviews
};

function App({films, filmReviews}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={
          <MainPage
            films={films}
          />
        }
        />
        <Route path={AppRoute.SignIn} element={<SignInPage/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListPage films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Films}/:id`} element={<FilmPage films={films} filmReviews={filmReviews}/>}/>
        <Route path={`${AppRoute.Films}/:id/${AppRoute.AddReview}`} element={<AddReviewPage films={films}/>}/>
        <Route path={`${AppRoute.Player}/:id`} element={<PlayerPage films={films}/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
