import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../../components/history-router/history-router';
import NoPage from './no-page';

describe('Component: NoPage', () => {
  it('should render currectly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <NoPage/>
      </HistoryRouter>
    );

    const headerElement = screen.getByText(/Page Not Found/i);
    const linkElement = screen.getByText(/Go to home page/i);

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
