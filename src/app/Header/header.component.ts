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
          this.http.get('https://api.thecatapi.com/v1/images/search?limit=10').subscribe((cat: any) => {
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