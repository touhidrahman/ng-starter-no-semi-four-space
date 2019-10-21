import { Component, OnInit } from '@angular/core'

import { TodoService } from './shared/services/todo.service'
import { User, UserService, IUser } from './shared/services/user.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'ng-starter-no-semi-four-space'

    constructor(
        private todoService: TodoService,
        private userService: UserService,
    ) {}

    ngOnInit() {
        this.userService.getMany<User>().subscribe((v) => {
            console.log('TCL: User :', v) // ! remove
        })

        this.userService.delete<User>(1).subscribe((v) => {
            console.log('TCL: deleted :', v) // ! remove
        })
    }
}
