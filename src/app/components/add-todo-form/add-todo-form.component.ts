import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validator, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {
  
  @Output() newTodoEvent = new EventEmitter<Todo>()

  formGroupTodo: FormGroup = new FormGroup({
    todo: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  addTodo(form: FormGroupDirective) {
    const todo: Todo = {
      content: this.formGroupTodo.get('todo')?.value,
      completed: false
    };

    this.newTodoEvent.emit(todo)
    form.resetForm()
    this.formGroupTodo.clearValidators()
  }

  get todo() {
    return this.formGroupTodo.get('todo')
  }

  getError () {
    if (this.formGroupTodo.get('todo')?.hasError('required')) {
      return 'You must enter a value'
    }
    return this.formGroupTodo.get('todo') ? 'Min 3 Character' : ''
  }
}
