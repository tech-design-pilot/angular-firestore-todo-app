import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {
  private _bottomSheetRef = inject<MatBottomSheetRef<TodoCreateComponent>>(MatBottomSheetRef);
  private todoService = inject(TodoService);

  todoForm!: FormGroup;

  constructor() {
    this.initForm();
  }

  initForm() {
    this.todoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      dueDate: new FormControl(new Date(), Validators.required),
      priority: new FormControl('High', Validators.required),
    });
  }

  onSubmit() {
    if (this.todoForm.invalid) {
      return;
    }

    // post the data to firestore
    this.todoService.createItem(this.todoForm.value).then(
      data => {
        console.log('saved data');
        this._bottomSheetRef.dismiss();
      }
    )
  }

}
