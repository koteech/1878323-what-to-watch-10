import NoPage from '../../pages/no-page/no-page';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

function PlayerPage(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const film = films.find((element) => element.id.toString() === params.id);
  if (film) {
    return (
      <div className="player">
        <video src={film.videoLink} className="player__video" poster={film.posterImage}/>
        <button onClick={() => navigate(-1)} type="button" className="player__exit">Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"/>
              <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"/>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <NoPage/>;
}

export default PlayerPage;
