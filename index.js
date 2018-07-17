import { AppRegistry, UIManager } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// Enable animations for android.
UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent(appName, () => App);
