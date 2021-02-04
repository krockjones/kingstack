import {Component, OnInit} from '@angular/core';

interface Boars {
  id: number;
  name: string;
  dob: string;
  status: boolean;
}

interface Sows {
  id: number;
  name: string;
  dob: string;
  status: boolean;
}

interface Breeds {
  type: string;
}

@Component({
  selector: 'app-lineage-search',
  templateUrl: './lineage-search.component.html',
  styleUrls: ['./lineage-search.component.scss']
})
export class LineageSearchComponent implements OnInit {

  selectedBoar: string = undefined;
  selectedSow: string = undefined;
  selectedBreed: string = undefined;
  queryRegNumber: number = undefined;

  breeds: Breeds[] = [
    {type: 'Guinea Hog'},
    {type: 'Red Wattle'}
    ];

  boars: Boars[] = [
    {id: 1, name: 'Six-Two', dob: '2017-01-01', status: true},
    {id: 2, name: 'Turnip', dob: '2020-11-01', status: true},
    {id: 3, name: 'Brutus', dob: '2020-11-01', status: true}
  ];

  sows: Sows[] = [
    {id: 1, name: 'Clarebelle', dob: '2017-01-01', status: true},
    {id: 2, name: 'Porter', dob: '2020-05-01', status: true}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  whatPrefix(): string {
    return (this.selectedBreed !== undefined) ? (this.selectedBreed === 'Red Wattle') ? 'RW' : 'GH' : '';
  }

  isBreedSelected(): boolean {
    return !(this.selectedBreed !== undefined && typeof this.selectedBreed === 'string');
  }

  isSowSelected(): boolean {
    return (this.selectedSow !== undefined && typeof this.selectedSow === 'string');
  }

  isBoarSelected(): boolean {
    return (this.selectedBoar !== undefined && typeof this.selectedBoar === 'string');
  }

  isRegNumEntered(): boolean {
    return (this.queryRegNumber !== undefined && typeof this.queryRegNumber === 'number');
  }
}
