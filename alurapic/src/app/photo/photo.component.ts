import { Component } from '@angular/core';

@Component({
    selector: 'ap-photo', // Nome do componente para ser chamado por outro compronent
    templateUrl:'photo.component.html' // Html do Component
})
export class PhotoComponent
{
    desciption = 'Tecnico';
    url = 'https://www.lance.com.br/files/article_main/uploads/2020/08/06/5f2c30bb66dda.jpeg';
}