import { Component } from "@angular/core"; 
import { GalleryService } from "../shared/gallery.service";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
})

export class GalleryComponent {

constructor(public galleryService: GalleryService) {}

    
  getGallery() {
    if (this.galleryService.findForm === []) {
      alert('Choose a breed of cat');
      return
    }
    return this.galleryService.response
  }
}