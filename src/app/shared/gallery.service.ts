import { Injectable } from "@angular/core";

export interface GalleryItem {
    id?: string,
    url?: string,
    width?: number,
    height?: number
  }

@Injectable({providedIn: 'root'})

export class GalleryService  {
  
  constructor() { }

    public gallery: GalleryItem[] = []
    public loading: boolean = true;

    findForm: GalleryItem[] = [];

    response: any = {
      id: '',
      url: '',
      width: 0,
      height: 0
  }
}