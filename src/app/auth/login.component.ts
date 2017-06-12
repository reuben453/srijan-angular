import { Component } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'app';
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  login(email, password) {
    let ret = this.afAuth.auth.signInWithEmailAndPassword(email, password);
    console.log("Signed in?", this.user, ret);
    ret.then((res) => {
      console.log("really signed in", res, this.user);
      this.router.navigate(['/dashboard']);
    }).catch(err => console.log("error", err));
  }
}
