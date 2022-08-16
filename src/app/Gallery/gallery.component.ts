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
    if (this.galleryService.findForm.trim() === '') {
      alert('Enter the name of image');
      return
    }
    return this.galleryService.response[this.galleryService.findForm].image
  }
}