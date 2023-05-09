if (__DEV__) {
  import('./ReactotronConfig').then(() => {});
}

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
