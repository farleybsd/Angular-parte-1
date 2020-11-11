import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo', // Nome do componente para ser chamado por outro compronent
    templateUrl:'photo.component.html' // Html do Component
})
export class PhotoComponent
{
   @Input() description="";
   @Input() url="";
}