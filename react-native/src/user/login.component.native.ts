import {Component} from '@angular/core';
import {OpacityFeedback} from 'angular2-react-native';
import {StyleSheet} from 'react-native';

//import {UserService} from '../services/user.service';


@Component({
  selector: 'login-component',
  host: {position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'},
  directives: [OpacityFeedback],
  template: `
<View [styleSheet]="styles.container">
  <Text [styleSheet]="styles.welcome">
    Welcome to family.me native app1
  </Text>
</View>
<Image [styleSheet]="styles.image" [source]="familymeLogo"></Image>
`
})
export class LoginComponentNative {

  familymeLogo: string = require('./../assets/images/logo.png');
  styles: any;
  constructor() {
    this.styles = StyleSheet.create({
      container: {
        position: 'absolute',
        left: 0,
        right:0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3efe8',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      image: {
        height: 47,
        width: 152,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0
      }
    });
  }
}

