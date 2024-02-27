import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnDestroy {

  text: string;
  show: boolean;
  suscription: Subscription;

  constructor(private _imageService: ImageService) {
    this.text = '';
    this.show = false;
    this.suscription = this._imageService.getError().subscribe(data => {
      this.showMessage();
      this.text = data;
    })
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  showMessage() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2000)
  }

}
