import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  @Input() displayLines: Array<string>;
  @Input() lineageRow: number;

  // Default all values to false
  private buildList = {
    'bottom-straight': false,
    'bottom-left': false,
    'bottom-right': false,
    'top-straight': false,
    'top-left': false,
    'top-right': false
  };

  private LINE_DIRECTION = {
    0: 'bottom-straight',
    1: 'bottom-left',
    2: 'bottom-right',
    3: 'top-straight',
    4: 'top-left',
    5: 'top-right',
  };

  private mapLineDirectionDict(): any[] {
   return Object.keys(this.LINE_DIRECTION).map(key => {
        return this.LINE_DIRECTION[key];
      });
}
  constructor() {}

  checkBuildList(direction): boolean {
    return this.buildList[direction];
  }

  ngOnInit(): void {
    if (this.lineageRow !== undefined && !(this.lineageRow in [1, 2, 3, 4, 5])) {
      this.lineageRow = 0;
    }
    if (this.displayLines !== undefined) {
      // Build a list from input directive
      this.displayLines.forEach(direction => {
        try {
          const temp = this.mapLineDirectionDict();
          this.buildList[direction] = temp.includes(direction);
        } catch (e) {
          if (e instanceof TypeError) {
            const acceptableTypes = this.mapLineDirectionDict();
            throw TypeError('Acceptable directions for the ViewComponent [displayLines] directive are: \n'
              .concat(acceptableTypes.join(' ,\n')));
          } else {
            throw e;
          }
        }
      });
    }
  }

  isRow(row: number): boolean {
    return (row === this.lineageRow);
  }
}
