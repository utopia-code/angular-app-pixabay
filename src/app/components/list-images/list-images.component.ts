import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrl: './list-images.component.css'
})
export class ListImagesComponent {

  word: string = '';
  listImages: any[] = [];
  suscription: Subscription;
  loading: boolean = false;

  imagesPerPage: number = 30;
  currentPage: number = 1;
  calculateTotalPages: number = 0;

  constructor(private _imageService: ImageService) {
    this.suscription = this._imageService.getKeyword().subscribe(data => {
      this.word = data;

      // Reset finder
      this.currentPage = 1;

      this.loading = true;
      setTimeout(() => {
        this.getImages();
      }, 1000)
    })
  }

  getImages() {
    this._imageService.getImages(this.word, this.imagesPerPage, this.currentPage).subscribe(data => {
      this.loading = false;

      if(data.hits.length === 0) {
        this._imageService.setError('Opss...there are no results');
        return
      }

      this.calculateTotalPages = Math.ceil(data.totalHits / this.imagesPerPage);

      this.listImages = data.hits;
      
    }, error => {
      console.log(error)
      this._imageService.setError('Opss...an error has occurred')
      this.loading = false;
    })
  }

  nextPage() {
    this.currentPage++
    this.loading = true
    this.listImages = []
    this.getImages()
  }

  backPage() {
    this.currentPage--
    this.loading = true
    this.listImages = []
    this.getImages()
  }

  backPageDisabled() {
    if (this.currentPage === 1) {
      return false;
    } else {
      return true;
    }
  }

  nextPageDisabled() {
    if (this.currentPage === this.calculateTotalPages) {
      return false;
    } else {
      return true;
    }
  }

}
