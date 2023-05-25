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
  getImageData: any = {};
  image: string = 'ab.png';
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }


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


  uploadImage(): void {
    const formData = new FormData();
    formData.append('image', this.selectedFile || '');
    console.log(formData,this.selectedFile)

    this.http.post(`${this.URL}image/upload/`, formData).subscribe({
      next: (res) => {
        alert('image upload successfully..');
        this.getImageData = res;
        console.log(this.getImageData);

        this.image = this.getImageData.path;
      },
      error: (err) => {
        alert(err);
        console.log(err);
      },
    });
  }

}
