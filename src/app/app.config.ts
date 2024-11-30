import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
  provideFirebaseApp(() => initializeApp({ "projectId": "angular-todo-app-27115", "appId": "1:135850969668:web:af10f22d6a3893acf08a11", "storageBucket": "angular-todo-app-27115.firebasestorage.app", "apiKey": "AIzaSyCEmhtFhlnlvSYgOra8UOTc_i1lxZOA67E", "authDomain": "angular-todo-app-27115.firebaseapp.com", "messagingSenderId": "135850969668" })),
  provideFirestore(() => getFirestore()),
  provideNativeDateAdapter()]
};
