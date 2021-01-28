import { Component, OnInit } from '@angular/core';
import {VERSION} from '../../environments/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private version: string;
  constructor() {this.version = VERSION.version; }

  ngOnInit(): void {
  }
  getVersion(): string {
    return this.version;
  }
}
