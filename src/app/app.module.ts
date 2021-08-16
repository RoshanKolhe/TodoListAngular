import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

const appRoutes: Routes = [
  {path: '',component:TodosComponent},
  {path: 'about',component:AboutComponent},
  //{path: 'addTodo',component:AddTodoComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    ButtonComponent,
    AboutComponent,
    AddTodoComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
