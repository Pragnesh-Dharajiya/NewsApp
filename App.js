import React, {Component} from 'react';
import {Provider} from 'react-redux';
import RouteApp from './navigation/routes';
import store from './src/redux/stores/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouteApp />
      </Provider>
    );
  }
}
export default App;
