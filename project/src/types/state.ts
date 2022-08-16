import {store} from '../hooks';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
