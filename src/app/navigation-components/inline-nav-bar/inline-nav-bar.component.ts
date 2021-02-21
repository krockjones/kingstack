import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-nav-bar',
  templateUrl: './inline-nav-bar.component.html',
  styleUrls: ['./inline-nav-bar.component.scss']
})
export class InlineNavBarComponent implements OnInit {
  @ViewChild('bottomNav') bottomNav: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  adjustFixedNav(isOpen: boolean): void {
    if (isOpen) {
      this.bottomNav.nativeElement.style.width = '85%';
    } else {
      this.bottomNav.nativeElement.style.width = '100%';
    }
  }

}
