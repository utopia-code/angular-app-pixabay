import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrl: './search-img.component.css'
})
export class SearchImgComponent {

  nameIMG: string;

  constructor(private _imageService: ImageService) {
    this.nameIMG = '';
  }

  searchImages() {
    console.log(this.nameIMG)

    if (this.nameIMG === '') {
      this._imageService.setError('Add a new search text');
      return
    }

    this._imageService.sendKeyword(this.nameIMG)
  }
}
