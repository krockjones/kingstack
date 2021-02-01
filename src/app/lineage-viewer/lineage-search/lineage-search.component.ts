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

@Component({
  selector: 'app-lineage-search',
  templateUrl: './lineage-search.component.html',
  styleUrls: ['./lineage-search.component.css']
})
export class LineageSearchComponent implements OnInit {

  selectedBoar: string;
  selectedSow: string;

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
}
