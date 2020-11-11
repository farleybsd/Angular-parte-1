import { PhotoComponent } from './photo/photo.component';
// Agrupador de componentes no mesmo Modulo

import { NgModule } from "@angular/core";

@NgModule({
    declarations: [PhotoComponent], // privado
    exports:[PhotoComponent] // publico
})
export class PhotosModule{

}