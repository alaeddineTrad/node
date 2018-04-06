import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';
@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html'
})

export class TasksComponent {
    tasks: Task[];
    task: string;
      constructor(private taskService:TaskService){
        this.taskService.getTasks()
            .subscribe(tasks=>{
                console.log(tasks);
                this.tasks= tasks;

            });

    }
      addTask(event){
          event.preventDefault();
          var  newTask = {
              task: this.task,
              isDone: false
          }
          this.taskService.addTask(newTask)
              .subscribe(task=>{
                  this.tasks.push(task);
                  this.task= '';
              });
          console.log(this.task);
      }
      deleteTask(id){
          var tasks = this.tasks;

          this.taskService.deleteTask(id).subscribe(data =>{
              if(data.n == 1){
                  for (var i=0;i<tasks.length;i++){
                      tasks.splice(i,1);
                  }
              }
          });
      }
    updateStatus(task){
        var _task = {
            _id:task._id,
            task: task.task,
            isDone: !task.isDone
        };

        this.taskService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }
}

