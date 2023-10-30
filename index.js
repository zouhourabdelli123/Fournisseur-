import { AppRegistry } from 'react-native';
import App from './App'; // Vous pouvez importer le composant racine de votre application ici
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
