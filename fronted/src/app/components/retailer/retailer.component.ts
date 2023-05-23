import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit{

  ngOnInit(): void {

  }

  constructor(){}

  status:string='create';

  changeStatus(status:string){
    this.status=status;
  }

}
