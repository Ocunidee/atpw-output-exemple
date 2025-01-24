import { Component } from '@angular/core'
import { AddTaskComponent } from './add-ask/add-ask.component'

@Component({
  selector: 'app-root',
  imports: [AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items = ['Do the laundry', 'Wash the dishes', 'Read 20 pages']

  addItem(item: string): void {
    this.items.push(item)
  }
}
