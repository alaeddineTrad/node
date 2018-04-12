import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {NetworkService} from './services/network.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[TaskService,NetworkService]
})
export class AppComponent { }
