import {bootstrapReactNative, HTTP_PROVIDERS, ROUTER_PROVIDERS} from 'angular2-react-native';
import {HelloApp} from './hello';

bootstrapReactNative(
  'familyme',
  HelloApp,
  [HTTP_PROVIDERS, ROUTER_PROVIDERS]
);