import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit{

  ngOnInit(): void {

  }

  constructor(){}

  status:string='create';

  changeStatus(status:string){
    this.status=status;
  }

}
