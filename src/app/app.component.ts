import { Component } from '@angular/core';
import { Task } from './models/Task';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';

  tasks: Task[] = [
      {
        task: "Bekerja Bagai Kuda",
        status: false,
        category: "Work",
        id: 1
      }
    ]

  taskValidator = new FormGroup ({
    taskName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    category: new FormControl('', [
      Validators.required
    ])
  })

  categories = ['School', 'Work', 'Hobby']
  displayedColumns: string[] = ["id", "task", "status", "category", "actions"]

  get taskName() {
    return this.taskValidator.get('taskName')
  }

  get category() {
    return this.taskValidator.get('category')
  }

  getErrorTask() {
    if (this.taskValidator.get("taskName")?.hasError('required')) {
      return 'You must enter a value'
    }

    return this.taskValidator.get("taskName") ? 'Min 3 Character' : ''
  }

  onSubmit(form: FormGroupDirective) {
    const {taskName, category} = form.value
    this.tasks = [...this.tasks, new Task(taskName, false, category)]
    form.resetForm()
    this.taskValidator.reset()
  }
  
  taskDone (index: number) {
    this.tasks[index].status = !this.tasks[index].status
  }
}
