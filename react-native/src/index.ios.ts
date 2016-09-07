import {bootstrapReactNative, ROUTER_PROVIDERS, HTTP_PROVIDERS} from 'angular2-react-native';
import {LoginComponentNative} from './user/login.component.native';

bootstrapReactNative(
  'familyme',
  LoginComponentNative,
  [ROUTER_PROVIDERS, HTTP_PROVIDERS]
);