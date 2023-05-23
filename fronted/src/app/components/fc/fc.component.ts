import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc',
  templateUrl: './fc.component.html',
  styleUrls: ['./fc.component.css']
})
export class FCComponent implements OnInit{

  ngOnInit(): void {

  }

  constructor(){}

  status:string='create';

  changeStatus(status:string){
    this.status=status;
  }

}
