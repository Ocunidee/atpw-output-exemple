import { Component, signal } from '@angular/core'
import { AddTaskComponent } from './add-ask/add-ask.component'

@Component({
  selector: 'app-root',
  imports: [AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly items = signal(['Do the laundry', 'Wash the dishes', 'Read 20 pages'])

  addItem(item: string): void {
    this.items.update(items => [...items, item])
  }
}
