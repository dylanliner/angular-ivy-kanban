import { Component, VERSION } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

headers = ["TODO", "Under development", "To test", "to deploy"];


  tasksToDo : Task[] = [new Task()]

  tasksUnderDev = []

  tasksToTest = []

  tasksToDeploy = []

}
