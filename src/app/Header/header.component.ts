import { Component, OnInit} from "@angular/core";
import { GalleryService, GalleryItem } from "../shared/gallery.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
constructor(public galleryService: GalleryService, private http: HttpClient) {}
    
  search(): Observable<GalleryItem[]> {
    const APIKEY = 'e644a991-0319-4b39-840f-08c4781bc4ad';
    return this.http.get<GalleryItem[]>('https://api.thecatapi.com/v1/images/search?breed_id=beng')
    .pipe(tap(gallery => this.galleryService.gallery = gallery))
    // .subscribe((cat: GalleryItem) => {
    //   return this.galleryService.response = {
    //     id: cat.id,
    //     url: cat.url,
    //     width: cat.width,
    //     height: cat.height
    //   }
    // })
  }
  
  ngOnInit(): void {
    this.search().subscribe(() => {
      this.galleryService.loading = false
          });
  }
}