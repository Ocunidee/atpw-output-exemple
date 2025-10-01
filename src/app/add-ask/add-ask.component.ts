import { Component, output } from '@angular/core'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-ask.component.html',
  styleUrl: './add-ask.component.scss'
})
export class AddTaskComponent {
  readonly newTask = output<string>()

  addNewTask(element: HTMLInputElement): void {
    this.newTask.emit(element.value)
    element.value = ''
  }
}
