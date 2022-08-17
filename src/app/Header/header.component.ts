import { Component, OnInit} from "@angular/core";
import { GalleryService, GalleryItem, Breed } from "../shared/gallery.service";
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

onChange(): Observable<Breed[]> {
  return this.http.get<Breed[]>('https://api.thecatapi.com/v1/breeds')
  .pipe(tap(breeds => {
    if (this.galleryService.breeds === []) {
    alert('Choose a breed of cat');
    return
  }
    this.galleryService.breeds = breeds}
    ))
}
    
  search(): Observable<GalleryItem[]> {
    // const APIKEY = 'e644a991-0319-4b39-840f-08c4781bc4ad';
    return this.http.get<GalleryItem[]>('https://api.thecatapi.com/v1/images/search?limit=10&page=100&order=Desc')
    .pipe(tap(gallery => this.galleryService.gallery = gallery))
  }
  
  ngOnInit(): void {
    this.onChange()
    this.search().subscribe(() => {
      this.galleryService.loading = false
          });
  }
}