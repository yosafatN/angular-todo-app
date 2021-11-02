import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  todos: Todo[] = []
  editActive = -1
  editText: string = ''
  snackBarDuration = 1500

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      }
    ]
  }

  toggleDone (id: number) {
    this.todos.map((v,i) => {
      if (i == id) {
        v.completed = !v.completed
      }
      return v
    })
  }

  openSnackBar (message: string) {
    this._snackBar.open(message,undefined, {
      duration: this.snackBarDuration
    })
  }

  deleteTodo (id: number) {
      this.todos = this.todos.filter((v,i) => i !== id)
      this.openSnackBar("Successfully Deleted")
  }

  addTodo (todo: Todo) {
    this.todos.push(todo)
    this.openSnackBar("Successfully Added")
  }

  activateEdit(index: number) {
    this.editActive = index
    this.editText = this.todos.find((v,i) => i === index)!.content
  }

  saveEdit() {
    this.todos[this.editActive].content = this.editText
    this.editActive = -1
    this.openSnackBar("Successfully Changed")
  }
}
