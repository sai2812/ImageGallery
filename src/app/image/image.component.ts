import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  image: { "id": number; "category": string; "caption": string; "url": string; };


  constructor(private imgService: ImageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.image = this.imgService.getImage(
      +this.route.snapshot.params['id']
    )
  }

}
