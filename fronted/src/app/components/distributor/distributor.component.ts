import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit{

  ngOnInit(): void {

  }

  URL: string = 'http://localhost:3000/api/v1/';
  constructor(private http:HttpClient ){}

  status:string='create';

  changeStatus(status:string){
    this.status=status;
  }


  distributorCreate(value:any){
    console.log(value)
    this.http.post(`${this.URL}fc/`, value).subscribe({
      next:res=>{alert(res)
      console.log(res)},
      error:err=>{alert(err)
      console.log(err)}
    })
  }

}
