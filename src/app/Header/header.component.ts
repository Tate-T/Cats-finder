import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor(private http: HttpClient) { }

    findForm: string =  ''
      response: any = {
        id: '',
        url: '',
        width: null,
        height: null
        };
  
        search() {
          const APIKEY = 'e644a991-0319-4b39-840f-08c4781bc4ad';
          this.http.get('https://api.thecatapi.com/v1/images/search?breed_id=beng').subscribe((cat: any) => {
            return this.response = {
              id: cat.id,
              url: cat.url,
              width: cat.width,
              height: cat.height
            }
          })
        }
  
        getGallery() {
          if (this.findForm.trim() === '') {
            alert('Enter the name of image');
            return
        }
          return this.response[this.findForm].image
        }
  
        ngOnInit(): void {
          this.search();
        }
}