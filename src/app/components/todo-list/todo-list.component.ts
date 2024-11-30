import { Component, inject } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { TodoCreateComponent } from '../todo-create/todo-create.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  private todoService = inject(TodoService);

  todoList: Todo[] = [];

  private _bottomSheet = inject(MatBottomSheet);

  constructor() {
    this.todoService.getItems().subscribe(
      data => {
        this.todoList = data;
      }
    )
  }

  addNewTodo() {
    this._bottomSheet.open(TodoCreateComponent);
  }

  markAsCompleted(item: Todo) {
    item.completed = true;
    // save the todo item in Firestore
    this.todoService.updateItem(item.id, item).then(
      data => {

      }
    ).catch(error => {
      console.error('Error:', error);
    })
  }

  markAsInCompleted(item: Todo) {
    item.completed = false;
    // save the todo item in Firestore
    this.todoService.updateItem(item.id, item).then(
      data => {

      }
    ).catch(error => {
      console.error('Error:', error);
    })
  }

  deleteTodo(item: Todo) {
    // delete item from firestore
    this.todoService.deleteItem(item.id).then(
      data => {

      }
    ).catch(error => {
      console.error('Error:', error);
    })
  }
}
