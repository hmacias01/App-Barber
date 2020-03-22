import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  id: any
  public Usuario: usuario;

  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Mis cortes',
      url: 'home/cortes',
      icon: 'person'
    },
    {
      title: 'Mis citas',
      url: 'home/list',
      icon: 'calendar'
    },
    {
      title: 'Cerrar sesion',
      url: '/login',
      icon: 'log-out'
    }
  ];

 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: ActivatedRoute
  ) {
    this.initializeApp();
    console.log(this.route.snapshot.params['id']);
    this.id=this.route.snapshot.params['id'];
  }
 


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
