import { NgModule } from "@angular/core";
import { UserComponent } from './components/userComponent/user/user.component';

@NgModule({
    declarations:[
    UserComponent
  ],
    imports:[],
    providers:[],
    exports:[UserComponent]
})
export class AdminModule{}