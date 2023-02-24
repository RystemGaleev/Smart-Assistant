import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from './components/UI/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
