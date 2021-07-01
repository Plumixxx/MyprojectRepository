import { OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();

}
