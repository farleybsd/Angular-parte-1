import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';
//import { PhotoComponent } from './photo/photo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import {HttpClientModule} from '@angular/common/http';
import { PhotosModule } from './Photos/photos.module';

@NgModule({
  declarations: [
    AppComponent
   // PhotoComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,// Agrupador de componentes no mesmo Modulo
   // HttpClientModule, // Fazer requisao Rest
   AppRoutingModule, // Rotas
   ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
