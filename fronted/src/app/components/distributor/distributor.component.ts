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
  getImageData: any = {};
  image: string = 'ab.png';
  fileUplodedData = [];
  distRawData:any = {};
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  constructor(private http:HttpClient ){}

  status:string='create';

  changeStatus(status:string){
    this.status=status;
  }


  distributorCreate(value:any){
    this.distRawData = value;
    this.changeStatus('upload_doc')
  }

  uploadImage(value: Object): void {
    const formData = new FormData();
    formData.append('image', this.selectedFile || '');

    this.http.post(`${this.URL}image/upload/`, formData).subscribe({
      next: (res) => {
        alert('image upload successfully...');
        this.getImageData = res;
        this.image = this.getImageData.path;
        const key:string = Object.keys(value)[0];

        const imageMap: { [key: string]: string } = {};

        imageMap[key] =  this.image;
        this.distRawData[key]=this.image;
        console.log(this.distRawData)
      },
      error: (err) => {
        alert(err);
        console.log(err);
      },
    });
  }



  distDone(){
    this.http.post(`${this.URL}fc/`, this.distRawData).subscribe({
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
