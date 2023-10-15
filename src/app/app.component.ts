import { Component,OnInit } from '@angular/core';
import {APIService} from './api-service.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  public movieForm! :FormGroup;
  constructor(private service: APIService,private fb:FormBuilder) {
    this.movieForm=fb.group({
      'name':[null],
      'description':[null],
      'price':[null],
      'imageFile':[null],
      'startDate':[null],
      'endDate':[null],
      'movieCategory':[null]
    })
  }

  ngOnInit() {}


file:any;
  fileChange(event:any) {
    let fileList: FileList = event.target.files;
    this.file = fileList[0];
  }


  saveMovie(){
    const formData = new FormData();
    formData.append('imageFile', this.file,this.file.fileName);
    formData.append('name', this.movieForm.get('name')!.value);
    formData.append('description', this.movieForm.get('description')!.value);
    formData.append('price', this.movieForm.get('price')!.value);
    formData.append('startDate', this.movieForm.get('startDate')!.value);
    formData.append('endDate', this.movieForm.get('endDate')!.value);
    formData.append('movieCategory', this.movieForm.get('movieCategory')!.value);


    console.log(formData);
    console.log(this.file)

    this.service.CreateMovie(formData).subscribe(response => {
        alert(response)
      });
  }

  title = 'Angular-TicketsManagement';

}
