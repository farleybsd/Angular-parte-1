import { Photo } from './photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Api = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService
{
  //http: HttpClient;
    constructor(private http:HttpClient){
      //this.http = http;
    }

    listFromUser(username: string ){
     return this.http
      .get<Photo[]>(Api + '/' + username + '/photos');
     /* .subscribe(photos => {
        //console.log(photos);
        this.photos = photos,
        err => console.log(err)
      }); */ // subscribe vai ser realizado por quem chamar o http
    }

}
