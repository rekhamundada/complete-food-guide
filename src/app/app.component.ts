import { Component, OnInit, } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

ngOnInit() {
  firebase.initializeApp({
    apiKey: 'AIzaSyDo1UnG_vZQK4u9EuizNaUPem-QckHPSUI',
    authDomain: 'angular-recipe-book-beddb.firebaseapp.com'
  });
}

}
