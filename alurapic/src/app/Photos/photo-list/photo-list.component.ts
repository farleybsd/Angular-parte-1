import { Photo } from './../photo/photo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = []; // vai passar o valor photo-list-component

  constructor(
    private photoSerive : PhotoService,
    private activateRoute: ActivatedRoute

    )
  {
  }

  //Ciclo de vida tipo DidMount React
  ngOnInit(): void {

    const userName = this.activateRoute.snapshot.params.userName; //userName vem da route

    this.photoSerive
              .listFromUser(userName)
              .subscribe(photo => {
                //console.log( "Usuario: " + photo[0].userId);
                this.photos = photo
              });

  }

}
