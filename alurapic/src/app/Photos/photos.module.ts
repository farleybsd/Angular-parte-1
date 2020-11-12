import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
// Agrupador de componentes no mesmo Modulo

import { NgModule } from "@angular/core";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      PhotoComponent,
       PhotoListComponent
      ], // privado
    exports:[PhotoComponent], // publico
    imports: [
      HttpClientModule,
      CommonModule // Boa Pratica
    ]
})
export class PhotosModule{

}
