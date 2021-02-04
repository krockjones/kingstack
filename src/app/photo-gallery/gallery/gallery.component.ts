import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {MDCTextField} from '@material/textfield';


interface Image  {
  src: string;
  label: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit, AfterViewInit {
  @Input() galleryName: string;
  @Input() galleryImages: Array<Image>;

  textField: MDCTextField;
  constructor() { }

  ngAfterViewInit(): void {
    const element = document.querySelector('.mdc-text-field');

    if (element !== null) {
      this.textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    }
  }

  ngOnInit(): void {
  }

}

