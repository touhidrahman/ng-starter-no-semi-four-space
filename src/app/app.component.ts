import { Component, OnInit } from '@angular/core'
import { TodoService, Todo } from './shared/services/todo.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'ng-starter-no-semi-four-space'

    constructor(private todoService: TodoService) {}

    ngOnInit() {
        this.todoService.getMany<Todo>({ completed: true }).subscribe((v) => {
            console.log('TCL: todo :', v) // ! remove
        })
    }
}
