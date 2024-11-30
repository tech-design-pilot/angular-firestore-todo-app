import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: TodoListComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
];
