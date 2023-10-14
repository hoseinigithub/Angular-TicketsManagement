import { Component,OnInit } from '@angular/core';
import {APIService} from './api-service.service';

let name:string;
let description:string;
let price:number;
  let startDate:string;
  let endDate:string;
  let movieCategory:number;
  let imageFile:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {




  constructor(private service: APIService) {
  }

  ngOnInit() {

  }

  SaveMovie(){
  let  MovieBody = {
      Name: name,
      Description: description,
      Price: price,
      StartDate: startDate,
      EndDate: endDate,
      MovieCategory: movieCategory,
      ImageFile: imageFile
    };

    this.service.CreateMovie(MovieBody)
      .subscribe(response => {
        alert('OK')
      });
  }

  title = 'Angular-TicketsManagement';
  protected name = name;
  protected  description = description;
  protected  price = price;
  protected  imageFile = imageFile;
  protected  startDate = startDate;
  protected  endDate = endDate;
  protected  movieCategory = movieCategory;
}
