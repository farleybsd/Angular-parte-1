import { PhotoService } from './Photos/photo/photo.service';

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: any[] = [];

  constructor(photoSerive : PhotoService)
  {
    photoSerive
              .listFromUser('flavio')
              .subscribe(photo => {
                console.log( "Usuario: " + photo[0].userId);
                this.photos = photo
              });
  }

 }
