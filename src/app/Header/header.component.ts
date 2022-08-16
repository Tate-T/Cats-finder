import { Component, OnInit} from "@angular/core";
import { GalleryService, GalleryItem } from "../shared/gallery.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
constructor(public galleryService: GalleryService, private http: HttpClient) {}
    
  search() {
    const APIKEY = 'e644a991-0319-4b39-840f-08c4781bc4ad';
    this.http.get('https://api.thecatapi.com/v1/images/search?breed_id=beng').subscribe((cat: GalleryItem) => {
      return this.galleryService.response = {
        id: cat.id,
        url: cat.url,
        width: cat.width,
        height: cat.height
      }
    })
  }
  
  ngOnInit(): void {
    this.search();
  }
}