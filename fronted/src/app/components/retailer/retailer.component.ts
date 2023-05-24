import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit{

  ngOnInit(): void {

  }

  URL: string = 'http://localhost:3000/api/v1/';
  constructor(private http:HttpClient ){}

  status:string='create';

  changeStatus(status:string){
    this.status=status;
  }


  retailerCreate(value:any){
    this.http.post(`${this.URL}retailer/`, value).subscribe({
      next:res=>alert(res),
      error:err=>alert(err)
    })
  }

  retailerView(){
    
  }


}
