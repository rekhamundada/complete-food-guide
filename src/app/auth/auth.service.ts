import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => { // console.log(response)
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (tokengot: string) => this.token = tokengot
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
     .then(
      (tokengot) => this.token = tokengot
    );
    return this.token;
  }
  isAuthenticated() {
    // console.log('Token is ', this.token)
    return this.token != null;
  }
  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
