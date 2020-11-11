//import { PhotoComponent } from './photo/photo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './Photos/photos.module';

@NgModule({
  declarations: [
    AppComponent
   // PhotoComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule// Agrupador de componentes no mesmo Modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
