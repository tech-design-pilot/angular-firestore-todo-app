import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoCreateComponent } from '../todo-create/todo-create.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TodoService } from '../../services/todo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let mockTodoService: jasmine.SpyObj<TodoService>;
  let mockBottomSheetRef: jasmine.SpyObj<MatBottomSheetRef<TodoCreateComponent>>;

  beforeEach(async () => {
    mockTodoService = jasmine.createSpyObj('TodoService', ['createItem', 'getItems']);
    mockTodoService.createItem.and.returnValue(Promise.resolve());
    mockTodoService.getItems.and.returnValue(of([{}]));
    mockBottomSheetRef = jasmine.createSpyObj('MatBottomSheetRef', ['dismiss']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TodoCreateComponent],
      providers: [
        provideNativeDateAdapter(),
        provideAnimationsAsync(),
        provideFirebaseApp(() => initializeApp({ "projectId": "angular-todo-app-27115", "appId": "1:135850969668:web:af10f22d6a3893acf08a11", "storageBucket": "angular-todo-app-27115.firebasestorage.app", "apiKey": "AIzaSyCEmhtFhlnlvSYgOra8UOTc_i1lxZOA67E", "authDomain": "angular-todo-app-27115.firebaseapp.com", "messagingSenderId": "135850969668" })),
        provideFirestore(() => getFirestore()),
        { provide: TodoService, useValue: mockTodoService },
        { provide: MatBottomSheetRef, useValue: mockBottomSheetRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
