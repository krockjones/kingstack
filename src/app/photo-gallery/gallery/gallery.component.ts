import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MDCTextField} from '@material/textfield';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit, AfterViewInit {

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

