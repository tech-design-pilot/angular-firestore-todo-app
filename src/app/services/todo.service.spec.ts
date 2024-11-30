import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFirebaseApp(() => initializeApp({ "projectId": "angular-todo-app-27115", "appId": "1:135850969668:web:af10f22d6a3893acf08a11", "storageBucket": "angular-todo-app-27115.firebasestorage.app", "apiKey": "AIzaSyCEmhtFhlnlvSYgOra8UOTc_i1lxZOA67E", "authDomain": "angular-todo-app-27115.firebaseapp.com", "messagingSenderId": "135850969668" })),
        provideFirestore(() => getFirestore()),
      ],
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
