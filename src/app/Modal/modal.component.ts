import { Component } from "@angular/core"; 
import { GalleryService, GalleryItem } from "../shared/gallery.service";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent {
    constructor(public galleryService: GalleryService, private http: HttpClient) {}
    onToggleImage() {
        this.galleryService.showModal && this.http.get('https://api.thecatapi.com/v1/images/{image_id}') 
    }
}