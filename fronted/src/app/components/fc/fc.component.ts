import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc',
  templateUrl: './fc.component.html',
  styleUrls: ['./fc.component.css']
})
export class FCComponent implements OnInit{

  ngOnInit(): void {

  }

  URL: string = 'http://localhost:3000/api/v1/';
  constructor(private http:HttpClient ){}

  status:string='create';

  changeStatus(status:string){
    this.status=status;
  }


  fcCreate(value:any){
    console.log(value)
    this.http.post(`${this.URL}fc/`, value).subscribe({
      next:res=>{alert(res)
      console.log(res)},
      error:err=>{alert(err)
      console.log(err)}
    })
  }

}
