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
  getImageData: any = {};
  image: string = 'ab.png';
  fileUplodedData = [];
  retailerRawData:any = {};
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  constructor(private http:HttpClient ){}

  status:string='create';

  changeStatus(status:string){
    this.status=status;
  }


  retailerCreate(value:any){
    this.retailerRawData = value;
    this.changeStatus('upload_doc')
  }

  retailerView(){

  }

  uploadImage(value: Object): void {
    const formData = new FormData();
    formData.append('image', this.selectedFile || '');

    this.http.post(`${this.URL}image/upload/`, formData).subscribe({
      next: (res) => {
        alert('image upload successfully..');
        this.getImageData = res;
        this.image = this.getImageData.path;
        const key:string = Object.keys(value)[0];

        const imageMap: { [key: string]: string } = {};

        imageMap[key] =  this.image;
        this.retailerRawData[key]=this.image;
        console.log(this.retailerRawData)
      },
      error: (err) => {
        alert(err);
        console.log(err);
      },
    });
  }



  reatilerDone(){
    this.http.post(`${this.URL}fc/`, this.retailerRawData).subscribe({
      next: (res) => {
        alert(res);
        console.log(res);
      },
      error: (err) => {
        alert(err);
        console.log(err);
      },
    });
  }


}
