import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';

import { PhotoFormComponent } from './Photos/photo-form/photo-form.component';
import { PhotoListComponent } from "./Photos/photo-list/photo-list.component";


const routes: Routes  = [
    {path: 'user/flavio',component:PhotoListComponent},
    {path: 'p/add',component:PhotoFormComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
