import React, {Component} from 'react';

import RouteApp from './navigation/routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/stores/CreateStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouteApp />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
