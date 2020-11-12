import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

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
