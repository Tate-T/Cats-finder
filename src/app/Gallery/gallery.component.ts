import { Component } from "@angular/core"; 
import { GalleryService } from "../shared/gallery.service";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
})

export class GalleryComponent {

constructor(public galleryService: GalleryService) {}

galleryAppear(){
    this.galleryService.gallery.length > 0 && !this.galleryService.loading && (Math.ceil(this.galleryService.total / 9) !== this.galleryService.page - 1) && (this.galleryService.page + 1)
    if (this.galleryService.page > 1) {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
      }
}
}