import { Component, OnInit} from '@angular/core';
import { PhotosService } from './services/photos.service';
import { Photo } from './models/Photo';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  albumsId = [1,2,3]

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(public PhotosService: PhotosService){}
  

}
