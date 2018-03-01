import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  visibleIm: { "id": number; "category": string; "caption": string; "url": string; }[] = [];


  filterBy: string = 'all'
  constructor(private imgService: ImageService) {

    this.visibleIm = this.imgService.getImages();
  }

  ngOnInit() {
  }

  category(cat: string) {
    console.log(cat);
    this.visibleIm = this.imgService.getImageBycat(cat);
    console.log(this.visibleIm);
  }

}
