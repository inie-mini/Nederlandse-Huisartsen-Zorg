import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private auth: Auth,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) { }

  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      const uid = user.user.uid;
      return this.afs.doc(
        `users/${uid}`
      ).set({ uid, email: user.user.email });
    } catch (e) {
      return null;
    }
  }

  async signIn({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  resetPassword({ email }) {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch {
      alert("not reset");
    }
  }

  async logout() {
    return signOut(this.auth);
  }
};
