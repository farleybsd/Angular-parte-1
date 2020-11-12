import { PhotoService } from './Photos/photo/photo.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoSerive : PhotoService)
  {
  }

  //Ciclo de vida tipo DidMount React
  ngOnInit(): void {

    this.photoSerive
              .listFromUser('flavio')
              .subscribe(photo => {
                console.log( "Usuario: " + photo[0].userId);
                this.photos = photo
              });

  }

 }
