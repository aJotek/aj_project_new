import { Component, OnInit } from '@angular/core';
import {Image} from '../image';
import {IMAGE} from '../galleryimages'


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})



export class GalleryComponent implements OnInit {
  images = IMAGE
  image = Image 

  constructor() { }

  ngOnInit() {
  }

  
}
