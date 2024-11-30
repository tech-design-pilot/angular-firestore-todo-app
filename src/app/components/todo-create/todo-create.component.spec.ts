import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateComponent } from './todo-create.component';
import { TodoService } from '../../services/todo.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { By } from '@angular/platform-browser';

describe('TodoCreateComponent', () => {
  // set up the test suite
  let component: TodoCreateComponent; // component instance
  let fixture: ComponentFixture<TodoCreateComponent>; // fixture: give access to the component instance

  // Mock todo service
  let mockTodoService: jasmine.SpyObj<TodoService>;
  // Mock mat bottom sheet
  let mockBottomSheetRef: jasmine.SpyObj<MatBottomSheetRef<TodoCreateComponent>>;

  // import necessary modules that the component need to run
  beforeEach(async () => {
    // create the mocks 
    mockTodoService = jasmine.createSpyObj('TodoService', ['createItem']);
    mockTodoService.createItem.and.returnValue(Promise.resolve());
    mockBottomSheetRef = jasmine.createSpyObj('MatBottomSheetRef', ['dismiss']);

    await TestBed.configureTestingModule({
      imports: [
        TodoCreateComponent,
        ReactiveFormsModule,
      ],
      providers: [
        provideNativeDateAdapter(),
        provideAnimationsAsync(),
        provideFirebaseApp(() => initializeApp({
          "projectId": "your-project-id",
          "appId": "your-app-id",
          "storageBucket": "your-storage-bucket",
          "apiKey": "your-api-key",
          "authDomain": "your-api-key",
          "messagingSenderId": "your-messaging-sender-id"
        })),
        provideFirestore(() => getFirestore()),
        { provide: TodoService, useValue: mockTodoService },
        { provide: MatBottomSheetRef, useValue: mockBottomSheetRef },
      ]
    })
      .compileComponents(); // compile the component and its dependencies for testing

    // Creates a test instance of TodoCreateComponent.
    fixture = TestBed.createComponent(TodoCreateComponent);
    component = fixture.componentInstance;
    // Calls detectChanges to initialize the component and apply bindings.
    fixture.detectChanges();
  });

  // Verifies that the component instance is successfully created.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verify the form's default values
  it('should initialize the form with default values', () => {
    // get the form from component instance
    const form = component.todoForm;
    // perform expectations
    expect(form).toBeDefined();
    expect(form.get('title')?.value).toBe('');
    expect(form.get('dueDate')?.value).toEqual(jasmine.any(Date));
    expect(form.get('priority')?.value).toBe('High');

  });

  // Verify that the form is validated
  it('should validate the form fields correctly', () => {
    // get the form from component instance
    const form = component.todoForm;

    // get the form's controls
    const titleControl = form.get('title');
    const dueDateControl = form.get('dueDate');
    const priorityControl = form.get('priority');

    // expectations
    expect(titleControl?.valid).toBeFalse();
    titleControl?.setValue('Test title');
    expect(titleControl?.valid).toBeTrue();

    expect(dueDateControl?.valid).toBeTrue();
    dueDateControl?.setValue(null);
    expect(dueDateControl?.valid).toBeFalse();

    expect(priorityControl?.valid).toBeTrue();
  });

  // Verify that the method createItem and dismiss are called
  it('should call the createItem and teh dismiss functions on form submission', async () => {
    // get the form from component instance
    const form = component.todoForm;

    // set the value of the form
    form.setValue({
      title: 'Todo',
      dueDate: new Date(),
      priority: 'High'
    });

    // get a ref to the submit button
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    // perform a click action on the button ref
    submitButton.nativeElement.click();

    await fixture.whenStable();

    // expectations
    expect(mockTodoService.createItem).toHaveBeenCalledWith(form.value);
    expect(mockBottomSheetRef.dismiss).toHaveBeenCalledWith();
  });
});
