import { Photo } from './../../photo/photo';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = []; // passa parametro vindo de outro component
  rows: any[] = [];

  constructor() { }

 ngOnChanges(changes: SimpleChanges)
 {
   if(changes.photos)
      this.rows = this.groupColumns(this.photos);
 }

  groupColumns(photos: Photo[])
  {
      const newRows = [];
      for(let index = 0; index < photos.length; index+=3) {
        newRows.push(photos.slice(index, index + 3));

    }
    console.log(newRows);
      return newRows;
  }

}
